import {
  Button,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  Textarea,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import Container from "../../components/Container"
import CommentComponent from "../../components/Post-Detail/Comment"
import Content from "../../components/Post-Detail/Content"
import Profile from "../../components/Post-Detail/Profile"
import VoteButton from "../../components/VoteButton"
import { IdeaFull } from "../../types/idea"
import firebase from "../../libs/firebase"
import { useAuth } from "../../context/authentication"
import { Comment } from "../../types/comment"

const PostDetail: React.FC = () => {
  const router = useRouter()
  const { postSlug } = router.query
  const { user } = useAuth()
  const toast = useToast()

  const [post, setPost] = useState<IdeaFull>(null)
  const [postLoading, setPostLoading] = useState<boolean>(true)
  const [postMessage, setPostMessage] = useState<string>("Mesaj")

  const [comment, setComment] = useState<string>("")
  const [comments, setComments] = useState<Comment[]>([])
  const [commentLoading, setCommentLoading] = useState<boolean>(true)
  const [commentHasMore, setCommentHasMore] = useState<boolean>(true)
  const [commentMessage, setCommentMessage] = useState<string>("")
  const [processing, setProcessing] = useState<boolean>(false)

  const fetchPost = async (): Promise<void> => {
    if (!postSlug) return
    setPostLoading(true)
    try {
      const res = await firebase
        .firestore()
        .collection("idea-full")
        .where("slug", "==", postSlug)
        .limit(1)
        .get()

      if (res.empty) {
        setPostMessage(
          "Belirttiğiniz fikir bulunamadı. Lütfen adresin doğru olduğundan ve fikrin yayında olduğundan emin olun."
        )
        setPostLoading(false)
        return
      }
      const data = res.docs[0].data()
      setPost({
        documentId: res.docs[0].id,
        authorBio: data.authorBio,
        authorCity: data.authorCity,
        authorName: data.authorName,
        authorPhotoUrl: data.authorPhotoUrl,
        authorUserId: data.authorUserId,
        authorUserName: data.authorUserName,
        category: data.category,
        createdAt: data.createdAt,
        fullDesc: data.fullDesc,
        interactors: data.interactors,
        mediaUrl: data.mediaUrl,
        slug: data.slug,
        teamName: data.teamName,
        teamSlug: data.teamSlug,
        title: data.title,
        totalVote: data.totalVote,
        upVote: data.upVote,
      })
      setPostLoading(false)
    } catch (err) {
      console.log(err)
      setPostMessage(err)
      setPostLoading(false)
    }
  }

  const fetchComments = async (
    limit: number,
    start: firebase.firestore.Timestamp = null
  ): Promise<void> => {
    if (post === null) return
    setCommentLoading(true)
    const res =
      start !== null
        ? await firebase
            .firestore()
            .collection("idea-full")
            .doc(post.documentId)
            .collection("comment")
            .orderBy("createdAt", "desc")
            .startAfter(start)
            .limit(limit)
            .get()
        : await firebase
            .firestore()
            .collection("idea-full")
            .doc(post.documentId)
            .collection("comment")
            .orderBy("createdAt", "desc")
            .limit(limit)
            .get()

    if (res.empty) {
      setCommentLoading(false)
      setCommentHasMore(false)
      setCommentMessage("Görüntülenecek yorum bulunamadı.")
      return
    }
    const tempComments: Comment[] = comments
    res.forEach((comment) => {
      const data = comment.data()
      tempComments.push({
        commentId: comment.id,
        comment: data.comment,
        authorId: data.authorId,
        authorFullName: data.authorFullName,
        authorUserName: data.authorUserName,
        authorPhotoUrl: data.authorPhotoUrl,
        ideaId: data.ideaId,
        createdAt: data.createdAt,
        upVoters: data.upVoters,
        upVoterCount: data.upVoterCount,
        fresh: false,
      })
    })
    if (res.size < limit) {
      setCommentHasMore(false)
      setCommentMessage("Daha fazla yüklenecek yorum bulunamadı.")
    }
    setComments(tempComments)
    setCommentLoading(false)
  }

  const handleComment = async (): Promise<void> => {
    if (comment.length < 3) {
      toast({
        title: "Yorum yapılamadı.",
        description:
          "Yorumunuz minimum 3 karakter olabilir. Lütfen biraz daha açıklayıcı yorum yapın.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      return
    }
    setProcessing(true)
    const body = {
      commentText: comment,
      ideaId: post.documentId,
      authorId: user.userId,
      authorFullName: user.fullName,
      authorUserName: user.userName,
      authorPhotoUrl: user.photoUrl,
    }
    try {
      const res = await fetch("https://us-central1-logicl.cloudfunctions.net/comment/create", {
        method: "POST",
        body: JSON.stringify(body),
      })
      const json = await res.json()
      console.log(json.timeStamp)
      setComments([
        {
          commentId: json.commentId,
          comment: body.commentText,
          authorId: body.authorId,
          authorFullName: body.authorFullName,
          authorUserName: body.authorUserName,
          authorPhotoUrl: body.authorPhotoUrl,
          ideaId: post.documentId,
          createdAt: json.timeStamp,
          upVoters: [],
          upVoterCount: 0,
          fresh: true,
        },
        ...comments,
      ])
      toast({
        title: "Yorum başarıyla gönderildi.",
        description:
          "Geri dönütünüz için teşekkür ederiz. Sayenizde Logicl'dan hergün yüzlerce başarılı fikir çıkmakta.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setCommentMessage(
        comments.length < 1
          ? "Görünüşe göre ilk yorum atan sensin, keyfini çıkar :D"
          : commentMessage
      )
      setComment("")
      setProcessing(false)
    } catch (err) {
      console.log(err)
      toast({
        title: "Yorum yapılamadı.",
        description: err,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      setProcessing(false)
    }
  }

  useEffect(() => {
    if (!postLoading && post !== null && comments.length < 1) fetchComments(5)
  }, [post, postLoading, comments.length])

  useEffect(() => {
    if (!postSlug) return
    fetchPost()
  }, [postSlug])

  return (
    <Container bgSrc="/wave1.svg">
      <Flex
        boxShadow="md"
        mt={8}
        direction="column"
        p={8}
        w="1080px"
        h="auto"
        bgColor="#E6F8FD"
        borderRadius={12}
        position="relative"
      >
        {postLoading ? (
          <Spinner size="lg" color="blue" m="auto" />
        ) : post === null ? (
          <>
            <Text>{postMessage}</Text>
          </>
        ) : (
          <Flex position="relative" direction="column">
            <Content category={post.category} title={post.title} text={post.fullDesc} />
            <VoteButton
              top="0px"
              right="0px"
              total={post.totalVote}
              up={post.upVote}
              ideaId={post.documentId}
              interactors={post.interactors}
            />
          </Flex>
        )}
      </Flex>
      {postLoading ? (
        <></>
      ) : post === null ? (
        <></>
      ) : (
        <Flex
          mt={8}
          direction="column"
          w="1080px"
          h="auto"
          bgColor="#transparent"
          borderRadius={12}
        >
          <Wrap w="100%">
            <WrapItem
              boxShadow="md"
              borderRadius={12}
              flexDirection="column"
              p="30px 36px"
              flex="6"
              bgColor="#E6F8FD"
              marginBottom="50px"
            >
              <Heading marginBottom={4} size="md" color="#015D78">
                Yorumlar
              </Heading>
              <Stack width="100%" spacing={5}>
                {commentLoading && comments.length < 1 ? (
                  <Spinner size="lg" color="blue" m="auto" />
                ) : (
                  comments.map((comment) => {
                    return (
                      <CommentComponent
                        photoUrl={comment.authorPhotoUrl}
                        userName={comment.authorUserName}
                        key={comment.commentId}
                        text={comment.comment}
                        rating={comment.upVoterCount}
                        name={comment.authorFullName}
                        date={comment.createdAt}
                        interactors={comment.upVoters}
                        ideaId={post.documentId}
                        commentId={comment.commentId}
                        fresh={comment.fresh}
                      />
                    )
                  })
                )}
              </Stack>
              <Text
                mt={comments.length < 1 ? 0 : 4}
                color="gray.400"
                fontWeight="400"
                alignSelf="center"
              >
                {commentMessage}
              </Text>
              <Button
                mt={6}
                mb={2}
                width="100%"
                colorScheme="linkedin"
                display={commentHasMore ? "flex" : "none"}
                isDisabled={!commentHasMore}
                isLoading={commentLoading}
                onClick={() => fetchComments(10, comments[comments.length - 1].createdAt)}
              >
                Daha fazla yorum yükle
              </Button>
              <Flex
                mt={comments.length < 1 ? 8 : 4}
                p={4}
                borderRadius={12}
                width="100%"
                height="160px"
                bgColor="#D5F4FC"
                display={user ? "flex" : "none"}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  bgColor="white"
                  placeholder={
                    comments.length < 1
                      ? "İlk yorum yapan sen ol!"
                      : "Düşüncelerini paylaş, yapıcı ol."
                  }
                  height="100%"
                  resize="none"
                />
                <Button
                  mt={2}
                  colorScheme="linkedin"
                  isDisabled={comment.length < 1}
                  onClick={() => handleComment()}
                  isLoading={processing}
                >
                  Yorum Yap
                </Button>
              </Flex>
            </WrapItem>
            <WrapItem borderRadius={15} flexDirection="column" flex="2" pl={5}>
              <Profile
                name={post?.authorName}
                about={post?.authorBio}
                city={post?.authorCity}
                image={post?.authorPhotoUrl}
                authorUserName={post?.authorUserName}
                loading={postLoading}
              />
            </WrapItem>
          </Wrap>
        </Flex>
      )}
    </Container>
  )
}

export default PostDetail
