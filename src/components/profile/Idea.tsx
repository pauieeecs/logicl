import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { IdeaShort } from "../../types/idea"
import ProgressBar from "./ProgressBar"

type Props = {
  idea: IdeaShort
}

const Idea: React.FC<Props> = ({ idea }) => {
  const router = useRouter()
  return (
    <Flex
      width="90%"
      backgroundColor="#C3F2FF"
      borderRadius="8px"
      mt={4}
      direction="column"
      p={4}
      onClick={() => router.push(`/idea/${idea.slug}`)}
      cursor="pointer"
    >
      <Flex direction="row" alignItems="flex-end" justifyContent="space-between">
        <Text fontWeight="500" textTransform="uppercase" fontSize="12px" textColor="gray.400">
          {idea.category}
        </Text>
        <ProgressBar upVote={idea.upVote} totalVote={idea.totalVote} />
      </Flex>
      <Flex direction="column">
        <Flex alignItems="flex-end">
          <Text textColor="gray.700" fontSize="20px" fontWeight="500">
            {idea.title}
          </Text>
        </Flex>
        <Text textColor="#003848" fontSize="12px" noOfLines={4}>
          {idea.shortDesc}
        </Text>
        <Text textColor="#837C7C" fontSize="xs" alignSelf="flex-end" mt={4}>
          {new Date(idea.createdAt.seconds * 1000).toLocaleDateString("tr-TR")}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Idea
