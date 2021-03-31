import { Button, ButtonGroup, Image, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useAuth } from "../context/authentication"
import { IdeaInteractors } from "../types/idea"
type Props = {
  up: number
  total: number
  right: string
  top: string
  interactors: IdeaInteractors[]
  ideaId: string
}
// right="16px" top="-24px"
const VoteButton: React.FC<Props> = ({ right, top, up, total, interactors, ideaId }) => {
  const [voteable, setVoteable] = useState<boolean>(true)
  const [upVote, setUpVote] = useState<number>(up)
  const [totalVote, setTotalVote] = useState<number>(total)
  const [feeling, setFeeling] = useState<number>(-1)
  const [loading, setLoading] = useState<boolean>(true)
  const { user } = useAuth()
  const [vote, setVote] = useState<number>(-1)

  const toast = useToast()

  const handleVote = async (vote: number): Promise<void> => {
    if (!user || loading || !voteable) return
    setLoading(true)
    const body = {
      ideaId: ideaId,
      userId: user.userId,
      vote: vote,
    }
    try {
      await fetch("https://us-central1-logicl.cloudfunctions.net/vote/post", {
        method: "POST",
        body: JSON.stringify(body),
      })
      toast({
        title: "Başarılı.",
        description: "Fikir başarıyla oylandı.",
        status: "success",
        duration: 6000,
        isClosable: true,
      })
      setTotalVote(totalVote + 1)
      setUpVote(upVote + vote)
      setFeeling(vote)
      setVoteable(false)
      setLoading(false)
    } catch (err) {
      console.log(err)
      toast({
        title: "Bir hata oluştu.",
        description: err,
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
    if (user) {
      interactors.forEach((interactor) => {
        if (interactor.id === user.userId) {
          setVoteable(false)
          setFeeling(interactor.feeling)
        }
      })
    } else {
      setVoteable(false)
      setFeeling(-1)
    }
    setLoading(false)
  }, [user])

  return (
    <ButtonGroup spacing={4} position="absolute" right={right} top={top}>
      <Button
        isLoading={loading}
        color="white"
        bgColor={
          voteable
            ? vote === -1
              ? "#20D79E"
              : vote === 0
              ? "gray.400"
              : "#01A7D7"
            : feeling === 1
            ? "#20D79E"
            : "gray.400"
        }
        w="48px"
        h="48px"
        onBlur={() => {
          if (voteable || !loading) setVote(-1)
        }}
        _focus={voteable && { height: "64px", width: "64px" }}
        borderRadius="100%"
        flexDirection="column"
        justifyContent="center"
        _hover={vote !== 1 && { bgColor: "green.600" }}
        onClick={() => {
          if (vote === -1) setVote(1)
          else if (vote === 0) setVote(1)
          else handleVote(vote)
        }}
      >
        <Image src="/up.svg" mb={1} /> <Text>{upVote}</Text>
      </Button>
      <Button
        isLoading={loading}
        color="white"
        bgColor={
          voteable
            ? vote === -1
              ? "#E5212D"
              : vote === 1
              ? "gray.400"
              : "#01A7D7"
            : feeling === 0
            ? "#E5212D"
            : "gray.400"
        }
        w="48px"
        h="48px"
        onBlur={() => {
          if (voteable || !loading) setVote(-1)
        }}
        _focus={voteable && { height: "64px", width: "64px" }}
        borderRadius="100%"
        flexDirection="column"
        justifyContent="center"
        _hover={vote !== 0 && { bgColor: "red.700" }}
        onClick={() => {
          if (vote === -1) setVote(0)
          else if (vote === 1) setVote(0)
          else handleVote(vote)
        }}
      >
        <Text>{totalVote - upVote}</Text> <Image src="/down.svg" mt={1} />
      </Button>
    </ButtonGroup>
  )
}

export default VoteButton
