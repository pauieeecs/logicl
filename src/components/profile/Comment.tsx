import { Flex, Link, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { CommentUnderUser } from "../../types/comment"

type Props = {
  commentUnderUser: CommentUnderUser
}

const Comment: React.FC<Props> = ({ commentUnderUser }) => {
  const router = useRouter()

  if (!commentUnderUser) return null

  return (
    <Flex width="90%" backgroundColor="#C3F2FF" borderRadius={6} mt={4} p={4} direction="column">
      <Text fontWeight="bold" color="#01A7D7" textTransform="uppercase" fontSize="12px">
        {commentUnderUser.ideaCategory}
      </Text>
      <Flex direction="column">
        <Flex direction="row" alignItems="center">
          <Link
            textColor="gray.700"
            fontSize="20px"
            fontWeight="500"
            textTransform="capitalize"
            mr={1}
            onClick={() => router.push(`/post/${commentUnderUser.ideaSlug}`)}
          >
            {commentUnderUser.ideaTitle}
          </Link>
          <Text color="gray.500" fontWeight="bolder" fontSize="16px" mr={1}>
            -
          </Text>
          <Link
            textColor="#837C7C"
            fontSize="16px"
            onClick={() => router.push(`/profile/${commentUnderUser.ideaAuthorUserName}`)}
          >
            @{commentUnderUser.ideaAuthorUserName}
          </Link>
        </Flex>
        <Text
          textColor="#003848"
          fontSize="12px"
          noOfLines={3}
          cursor="pointer"
          onClick={() => router.push(`/post/${commentUnderUser.ideaSlug}`)}
        >
          {commentUnderUser.ideaShortDesc}
        </Text>
      </Flex>
      <Flex w="100%" direction="row" backgroundColor="#d6f6ff" p={2} align="normal" mt={2}>
        <Flex w="16px" bgColor="#01BAEF" borderRadius={2} mr={2} />
        <Flex direction="row" w="1200px" borderRadius={6} p={2}>
          <Flex direction="column">
            <Text textColor="#003848" fontSize="12px">
              {commentUnderUser.comment}
            </Text>
            <Flex alignItems="flex-end" mt={2}>
              <Link
                textColor="#9C9C9C"
                fontSize="12px"
                mr={1}
                onClick={() => router.push(`/profile/${commentUnderUser.commentAuthorUserName}`)}
              >
                @{commentUnderUser.commentAuthorUserName}
              </Link>
              <Text color="gray.500" fontWeight="bolder" fontSize="12px" mr={1}>
                -
              </Text>
              <Text textColor="#9C9C9C" fontSize="12px">
                {new Date(commentUnderUser.createdAt.seconds * 1000).toLocaleDateString("tr-TR")}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Comment
