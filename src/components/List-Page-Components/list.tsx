import { Button, Flex, Heading, Spinner, Text, Wrap, WrapItem } from "@chakra-ui/react"
import SmallPost from "./SmallPost"
import BigPost from "./BigPost"
import { useEffect, useState } from "react"
import { IdeaShort } from "../../types/idea"
import firebase from "../../libs/firebase"

const List: React.FC = () => {
  const [bigPosts, setBigPosts] = useState<IdeaShort[]>([])
  const [smallPosts, setSmallPosts] = useState<IdeaShort[]>([])
  const [MIPosts, setMIPosts] = useState<IdeaShort[]>([])
  const [message, setMessage] = useState<string>("")
  const [bigPostLoading, setBigPostLoading] = useState<boolean>(true)
  const [smallPostLoading, setSmallPostLoading] = useState<boolean>(true)
  const [hasMoreBigPost, setHasMoreBigPost] = useState<boolean>(true)

  const fetchBigPost = async (
    limit: number,
    start: firebase.firestore.Timestamp = null
  ): Promise<void> => {
    setBigPostLoading(true)
    const res = await (start === null
      ? firebase
          .firestore()
          .collection("idea-short")
          .orderBy("createdAt", "desc")
          .limit(limit)
          .get()
      : firebase
          .firestore()
          .collection("idea-short")
          .orderBy("createdAt", "desc")
          .startAfter(start)
          .limit(limit)
          .get())

    if (res.size < 1) {
      setMessage(
        bigPosts.length < 1 ? "Hiç fikir bulunamadı." : "Yüklenecek başka fikir bulunamadı."
      )
      setHasMoreBigPost(false)
      setBigPostLoading(false)
      return
    }

    const tempIdeas: IdeaShort[] = bigPosts
    res.docs.forEach((doc) => {
      const data = doc.data()
      tempIdeas.push({
        documentId: doc.id,
        authorName: data.authorName,
        authorUserId: data.authorUserId,
        authorUserName: data.authorUserName,
        category: data.category,
        createdAt: data.createdAt,
        interactors: data.interactors,
        mediaUrl: data.mediaUrl,
        shortDesc: data.shortDesc,
        slug: data.slug,
        teamName: data.teamName,
        teamSlug: data.teamSlug,
        title: data.title,
        totalVote: data.totalVote,
        upVote: data.upVote,
      })
    })
    if (res.size < limit) {
      setMessage("Yüklenecek daha fazla fikir bulunamadı")
      setHasMoreBigPost(false)
    }

    setBigPosts(tempIdeas)
    setBigPostLoading(false)
  }

  const fetchLittlePost = async (): Promise<void> => {
    setSmallPostLoading(true)
    const res = await firebase
      .firestore()
      .collection("idea-short")
      .orderBy("upVote", "desc")
      .limit(4)
      .get()
    const tempSmallPosts: IdeaShort[] = []
    res.forEach((post) => {
      const data = post.data()
      tempSmallPosts.push({
        documentId: post.id,
        authorName: data.authorName,
        authorUserId: data.authorUserId,
        authorUserName: data.authorUserName,
        category: data.category,
        createdAt: data.createdAt,
        interactors: data.interactors,
        mediaUrl: data.mediaUrl,
        shortDesc: data.shortDesc,
        slug: data.slug,
        teamName: data.teamName,
        teamSlug: data.teamSlug,
        title: data.title,
        totalVote: data.totalVote,
        upVote: data.upVote,
      })
    })
    setSmallPosts(tempSmallPosts)
    setSmallPostLoading(false)
  }
  //fetch small posts
  useEffect(() => {
    fetchLittlePost()
  }, [])

  //fetch big bois
  useEffect(() => {
    if (hasMoreBigPost && bigPosts.length < 1) fetchBigPost(10)
  }, [bigPosts.length, hasMoreBigPost])

  return (
    <Flex direction="column" w="100%" align="center">
      <Flex w="1080px" mt={10} flexDirection="column">
        <Text fontWeight="bold" color="#01A7D7" fontSize="24px" textTransform="uppercase" mb={2}>
          Öne çıkanlar
        </Text>
        <Flex justify="space-around">
          {smallPostLoading ? (
            <Spinner size="lg" color="blue" mx="auto" my={8} />
          ) : (
            <>
              {smallPosts.map((post, index) => (
                <SmallPost
                  isLast={index === smallPosts.length - 1}
                  smallPost={post}
                  key={post.documentId}
                />
              ))}
            </>
          )}
        </Flex>
      </Flex>
      <Wrap w="1080px" mt={8} spacing={4}>
        <WrapItem flex="6" mt={12} flexDirection="column">
          <Text fontWeight="bold" color="#01A7D7" fontSize="24px" textTransform="uppercase" mb={2}>
            Son Paylaşılanlar
          </Text>
          {bigPostLoading && bigPosts.length < 1 ? (
            <Spinner size="lg" color="blue" mx="auto" my={8} />
          ) : (
            <>
              {bigPosts.map((post) => (
                <BigPost post={post} key={post.documentId} />
              ))}
            </>
          )}
          <Text
            display={message === "" ? "none" : "flex"}
            fontSize="24px"
            color="gray.400"
            mx="auto"
            fontWeight="400"
          >
            {message}
          </Text>
          <Button
            width="100%"
            display={bigPosts.length < 1 || !hasMoreBigPost ? "none" : "flex"}
            isDisabled={bigPostLoading}
            isLoading={bigPostLoading}
            colorScheme="linkedin"
            onClick={() => fetchBigPost(10, bigPosts[bigPosts.length - 1].createdAt)}
          >
            Daha fazla fikir yükle
          </Button>
        </WrapItem>
      </Wrap>
    </Flex>
  )
}

export default List
