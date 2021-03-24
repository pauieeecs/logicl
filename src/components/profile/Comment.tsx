import { Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import ProgressBar from "./ProgressBar"

type Props = {
  category: string
  title: string
  text: string
  date: string
  commentCreatedAt: string
  commentText: string
  commentAuthorFullName: string
}

const Comment: React.FC<Props> = ({
  category,
  title,
  text,
  date,
  commentCreatedAt,
  commentText,
  commentAuthorFullName,
}) => {
  return (
    <Flex
      w="913px"
      h="237px"
      backgroundColor="#C3F2FF"
      borderRadius="8px"
      my={6}
      direction="column"
    >
      <Flex direction="row" justifyContent="space-between" mx={4}>
        <Text fontWeight="bold" textColor="#003848">
          {category}
        </Text>
        <ProgressBar upVote={29} totalVote={31} />
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
        <Text textColor="#003848" fontSize="xs" mx={4} noOfLines={2}>
          {text}
        </Text>
      </Flex>
      <Flex w="100%" h="100%" direction="row" align="normal">
        <Flex w="4px" h="100px" bgColor="#01BAEF" m={5}></Flex>
        <Flex direction="row" bgColor="#CAECF5" w="1200px" h="min" borderRadius="8px" mt={5}>
          <Image src="/up-button.svg" position="absolute" />
          <Flex direction="column" mt={2} ml={4}>
            <Text textColor="#003848" noOfLines={3} m={1} fontSize="sm">
              {commentText}
            </Text>
            <Text textColor="#9C9C9C" fontSize="xs">
              {commentAuthorFullName} {commentCreatedAt}
            </Text>
          </Flex>
          <Flex direction="column" align="center" justify="center" h="auto" w="50px" mx={4}>
            <Image src="/comment-up.svg" />
            <Text textColor="#003848" fontSize="sm">
              13
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" justify="flex-end" align="flex-end" w="100%">
          <Text textColor="#837C7C" fontSize="xs" mr={2}>
            {date}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Comment
