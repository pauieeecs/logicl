import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import ProgressBar from "./ProgressBar"

type Props = {
  category: string
  title: string
  text: string
  date: string
}

const Idea: React.FC<Props> = ({ category, title, text, date }) => {
  return (
    <Flex
      w="913px"
      h="156px"
      backgroundColor="#C3F2FF"
      borderRadius="8px"
      my={6}
      direction="column"
    >
      <Flex direction="row" justifyContent="space-between" mx={4}>
        <Text fontWeight="bold" textColor="#003848">
          {category}
        </Text>
        <ProgressBar upVote={44} downVote={33} />
      </Flex>
      <Flex direction="column" height="110px">
        <Flex direction="row">
          <Text textColor="#003848" fontWeight="bold" mx={4}>
            {title}
          </Text>
          <Text textColor="#837C7C" fontSize="sm">
            @keremesen
          </Text>
        </Flex>

        <Text textColor="#003848" fontSize="xs" mx={4} noOfLines={4}>
          {text}
        </Text>
      </Flex>
      <Flex direction="column" justify="flex-end" align="flex-end" w="100%">
        <Text textColor="#837C7C" fontSize="xs" mr={2}>
          {date}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Idea
