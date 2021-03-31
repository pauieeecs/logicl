import { Flex, Image, Spinner, Text } from "@chakra-ui/react"
import Container from "../../components/Container"
import React, { useEffect, useState } from "react"
import Idea from "../../components/profile/Idea"
import Comment from "../../components/profile/Comment"
import ProfileComponent from "../../components/profile/Profile"
import SwitchButton from "../../components/SwitchButton"
import { useAuth } from "../../context/authentication"
import firebase from "../../libs/firebase"
import { User } from "../../types/user"
import { IdeaShort } from "../../types/idea"
import { CommentUnderUser } from "../../types/comment"
import Head from "next/head"
import { useRouter } from "next/dist/client/router"

const ProfilePage: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true)
  const { user } = useAuth()
  const router = useRouter()
  const [userData, setUserData] = useState<User>(null)
  const [ideas, setIdeas] = useState<IdeaShort[]>([])
  const [userLoading, setUserLoading] = useState<boolean>(true)
  const [ideaLoading, setIdeaLoading] = useState<boolean>(true)
  const [ideaMessage, setIdeaMessage] = useState<string>("")
  const [ideaHasMore, setIdeaHasMore] = useState<boolean>(true)
  const [comments, setComments] = useState<CommentUnderUser[]>([])
  const [commentLoading, setCommentLoading] = useState<boolean>(true)
  const [commentHasMore, setCommentHasMore] = useState<boolean>(true)
  const [commentMessage, setCommentMessage] = useState<string>("")

  const fetchPost = async (
    limit: number,
    start: firebase.firestore.Timestamp = null
  ): Promise<void> => {
    if (userData === null) return
    setIdeaLoading(true)
    const res =
      start === null
        ? await firebase
            .firestore()
            .collection("idea-short")
            .where("authorUserId", "==", user.userId)
            .orderBy("createdAt", "desc")
            .limit(limit)
            .get()
        : await firebase
            .firestore()
            .collection("idea-short")
            .where("authorUserId", "==", user.userId)
            .orderBy("createdAt", "desc")
            .startAfter(start)
            .limit(limit)
            .get()

    if (res.size < 1) {
      setIdeaMessage(
        ideas.length < 1 ? "Kullanıcı hiç fikir paylaşmamış." : "Yüklenecek başka fikir bulunamadı."
      )
      setIdeaHasMore(false)
      setIdeaLoading(false)
      return null
    }

    const tempIdeas: IdeaShort[] = ideas
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
      setIdeaMessage("Yüklenecek daha fazla fikir bulunamadı")
      setIdeaHasMore(false)
    }

    setIdeas(tempIdeas)
    setIdeaLoading(false)
  }

  const fetchComments = async (
    limit: number,
    start: firebase.firestore.Timestamp = null
  ): Promise<void> => {
    if (userData === null) return
    setCommentLoading(true)
    const res =
      start !== null
        ? await firebase
            .firestore()
            .collection("user")
            .doc(user.userId)
            .collection("comment")
            .orderBy("createdAt", "desc")
            .startAfter(start)
            .limit(limit)
            .get()
        : await firebase
            .firestore()
            .collection("user")
            .doc(user.userId)
            .collection("comment")
            .orderBy("createdAt", "desc")
            .limit(limit)
            .get()

    if (res.empty) {
      setCommentLoading(false)
      setCommentHasMore(false)
      setCommentMessage(
        comments.length < 1
          ? "Görüntülenecek yorum bulunamadı."
          : "Yüklenecek daha fazla yorum bulunamadı"
      )
      return
    }
    const tempComments: CommentUnderUser[] = comments
    res.forEach((comment) => {
      const data = comment.data()
      tempComments.push({
        documentId: comment.id,
        ideaCategory: data.ideaCategory,
        ideaTitle: data.ideaTitle,
        ideaAuthorUserName: data.ideaAuthorUserName,
        ideaShortDesc: data.ideaShortDesc,
        ideaSlug: data.ideaSlug,
        comment: data.comment,
        commentAuthorUserName: data.authorUserName,
        createdAt: data.createdAt,
      })
    })
    if (res.size < limit) {
      setCommentHasMore(false)
      setCommentMessage("Daha fazla yüklenecek yorum bulunamadı.")
    }
    setComments(tempComments)
    setCommentLoading(false)
  }

  useEffect(() => {
    setUserLoading(true)
    const unsub = firebase
      .firestore()
      .collection("user")
      .doc(user?.userId)
      .onSnapshot((res) => {
        if (!res.exists) {
          setUserData(null)
          setUserLoading(false)
          return
        }
        const data = res.data()
        const tempUser: User = {
          fullName: data.fullName,
          userId: data.userId,
          userName: data.userName,
          birthDate: data.birthDate,
          country: data.country,
          city: data.city,
          email: data.email,
          logiclCoin: data.logiclCoin,
          bio: data.bio,
          photoUrl: data.photoUrl,
          joinedAt: data.joinedAt,
          experience: data.experience,
          level: data.level,
          role: data.role,
          jobTitle: data.jobTitle,
          authProvider: data.authProvider,
          gitHubLink: data.gitHubLink,
          twitterLink: data.twitterLink,
          teamName: data.teamName,
          teamSlug: data.teamSlug,
        }
        setUserData(tempUser)
        setUserLoading(false)
      })

    return () => unsub()
  }, [user?.userId])

  useEffect(() => {
    if (!userLoading && comments.length < 1) {
      fetchComments(2)
    }
  }, [userLoading, comments.length])

  useEffect(() => {
    if (!userLoading && ideas.length < 1) {
      fetchPost(2)
    }
  }, [userLoading, ideas.length])

  if (!userLoading && !user) {
    router.push("/auth")
  }

  return (
    <Container bgSrc="/wave1.svg">
      <Head>
        <title>{userData === null ? "Profil" : userData.fullName} | Logicl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        boxShadow="md"
        w="976px"
        borderRadius={6}
        h="539px"
        backgroundColor="#E6F8FD"
        my={6}
        direction="column"
        p={4}
      >
        {userLoading ? (
          <Spinner size="lg" color="blue" m="auto" />
        ) : userData === null ? (
          <Text fontSize="20px" fontWeight="500" textAlign="center" my="auto" color="gray.700">
            Kullanıcı bulunamadı. Lütfen adresi kontrol ediniz veya kullanıcının varlığından emin
            olunuz.
          </Text>
        ) : (
          <ProfileComponent isSameUser={true} user={userData} />
        )}
      </Flex>
      <Flex
        w="976px"
        p={4}
        borderRadius="8px"
        bgColor="#E6F8FD"
        direction="column"
        align="center"
        boxShadow="md"
      >
        <SwitchButton
          button1="Fikirler"
          button2="Yorumlar"
          active={isActive}
          setActive={setIsActive}
        />
        {isActive ? (
          <>
            {ideaLoading && ideas.length < 1 ? (
              <Spinner size="lg" color="blue" m={8} />
            ) : (
              <>
                {ideas.map((idea) => (
                  <Idea key={idea.documentId} idea={idea} />
                ))}
                {ideaLoading ? (
                  <Spinner size="lg" color="blue" m={8} />
                ) : (
                  <Text my={2} color="gray.400" fontWeight="400">
                    {ideaMessage}
                  </Text>
                )}
              </>
            )}
            <Flex
              flexDir="column"
              mt={4}
              onClick={() => fetchPost(5, ideas[ideas.length - 1].createdAt)}
              display={ideaHasMore ? "flex" : "none"}
            >
              <Image src="/profile-down.svg" cursor="pointer" />
              <Image src="/profile-down.svg" cursor="pointer" />
              <Image src="/profile-down.svg" cursor="pointer" />
            </Flex>
          </>
        ) : (
          <>
            {commentLoading && comments.length < 1 ? (
              <Spinner size="lg" color="blue" m={8} />
            ) : (
              <>
                {comments.map((comment) => (
                  <Comment commentUnderUser={comment} key={comment.documentId} />
                ))}
                {commentLoading ? (
                  <Spinner size="lg" color="blue" m={8} />
                ) : (
                  <Text my={2} color="gray.400" fontWeight="400">
                    {commentMessage}
                  </Text>
                )}
                <Flex
                  flexDir="column"
                  mt={4}
                  onClick={() => fetchComments(5, comments[comments.length - 1].createdAt)}
                  display={commentHasMore ? "flex" : "none"}
                >
                  <Image src="/profile-down.svg" cursor="pointer" />
                  <Image src="/profile-down.svg" cursor="pointer" />
                  <Image src="/profile-down.svg" cursor="pointer" />
                </Flex>
              </>
            )}
          </>
        )}
      </Flex>
    </Container>
  )
}

export default ProfilePage
