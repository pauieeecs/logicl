import { Avatar, Flex, Icon, Link, Spinner, Text, useToast } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/authentication"
import firebase from "../../libs/firebase"

type Props = {
  text: string
  rating: number
  userName: string
  date: firebase.firestore.Timestamp
  name: string
  photoUrl: string
  interactors: string[]
  ideaId: string
  commentId: string
  fresh: boolean
}
const Comment: React.FC<Props> = ({
  date,
  userName,
  name,
  text,
  rating,
  photoUrl,
  interactors,
  ideaId,
  commentId,
  fresh,
}) => {
  const router = useRouter()
  const { user } = useAuth()
  const toast = useToast()
  const [voteable, setVoteAble] = useState<boolean>()
  const [upVoteCount, setUpVoteCount] = useState<number>(rating)
  const [loading, setLoading] = useState<boolean>(false)

  const handleVote = async (): Promise<void> => {
    if (!ideaId || !commentId || !voteable) return
    try {
      setLoading(true)
      await fetch("https://us-central1-logicl.cloudfunctions.net/vote/comment", {
        body: JSON.stringify({
          commentId,
          ideaId,
          userId: user.userId,
        }),
        method: "POST",
      })
      setVoteAble(false)
      interactors.push(user.userId)
      setUpVoteCount(upVoteCount + 1)
      toast({
        title: "Yorum başarıyla oylandı.",
        description:
          "Öne çıkmasını istediğiniz yorumlara, böyle oylayarak katkı sağlayabilirsiniz.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    } catch (err) {
      console.log(err)
      toast({
        title: "Oylama başarısız.",
        description: err,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    }
  }
  useEffect(() => {
    if (user === null) return
    if (interactors.length < 1) {
      setVoteAble(true)
    } else {
      setVoteAble(true)
      interactors.forEach((interactor) => {
        if (interactor === user.userId) setVoteAble(false)
      })
    }
  }, [interactors, user])
  return (
    <Flex
      position="relative"
      w="100%"
      bgColor="#D5F4FC"
      justifyContent="space-between"
      p={4}
      borderRadius={12}
    >
      <Flex width="100%">
        <Avatar
          mr={4}
          alignSelf="center"
          name={name}
          src={photoUrl}
          onClick={() => router.push(`/profile/${userName}`)}
          cursor="pointer"
        />
        <Flex direction="column">
          <Flex alignItems="flex-end">
            <Link
              onClick={() => router.push(`/profile/${userName}`)}
              mr={1}
              fontSize="xs"
              color="#9C9C9C"
            >
              @{userName}
            </Link>
            <Text color="gray.500" fontSize="xs" fontWeight="bolder" mr={1}>
              -
            </Text>
            <Text fontSize="xs" color="#9C9C9C">
              {fresh
                ? new Date().toLocaleDateString("tr-TR")
                : new Date(date.seconds * 1000).toLocaleDateString("tr-TR")}
            </Text>
          </Flex>
          <Text mt={2} fontSize="14px">
            {text}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" justify="center" align="center" mx={4}>
        {loading ? (
          <Spinner />
        ) : (
          <Icon
            width="29px"
            height="18px"
            viewBox="0 0 29 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleVote()}
            _hover={voteable ? { cursor: "pointer" } : { cursor: "not-allowed" }}
          >
            <path
              d="M3.4075 18L14.5 6.87449L25.5925 18L29 14.5749L14.5 0L0 14.5749L3.4075 18Z"
              fill={voteable ? "#01BAEF" : "#4A5568"}
            />
          </Icon>
        )}
        <Text>{upVoteCount}</Text>
      </Flex>
    </Flex>
  )
}

export default Comment
