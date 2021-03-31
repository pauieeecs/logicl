import { Flex, Heading, Link, Text } from "@chakra-ui/react"
import VoteButton from "../VoteButton"
import { IdeaShort } from "../../types/idea"
import { useRouter } from "next/dist/client/router"

type Props = {
  post: IdeaShort
}

const BigPost: React.FC<Props> = ({ post }) => {
  const router = useRouter()
  return (
    <Flex
      boxShadow="md"
      w="100%"
      position="relative"
      borderRadius="10px"
      mb={10}
      bgColor="#E6F8FD"
      _hover={{ bgColor: "#D5F4FC", cursor: "pointer" }}
      flexDirection="column"
      p={4}
    >
      <VoteButton
        interactors={post.interactors}
        right="16px"
        top="-24px"
        up={post.upVote}
        total={post.totalVote}
        ideaId={post.documentId}
      />
      <Flex
        direction="column"
        justifyContent="space-between"
        width="100%"
        height="100%"
        onClick={() => router.push(`/post/${post.slug}`)}
      >
        <Flex direction="column">
          <Text fontWeight="bold" color="#01A7D7" textTransform="uppercase">
            {post.category}
          </Text>
          <Flex position="relative">
            <Heading
              fontWeight="600"
              textTransform="capitalize"
              fontSize="28px"
              noOfLines={1}
              maxW="560px"
            >
              {post.title}
            </Heading>
          </Flex>
          <Text fontSize="18px" noOfLines={5} mt={2} color="gray.600">
            {post.shortDesc}
          </Text>
        </Flex>
      </Flex>
      <Flex width="100%" alignSelf="flex-end" alignItems="center" justifyContent="flex-end" mt={2}>
        <Link
          color="gray.500"
          mr={2}
          zIndex="100"
          onClick={() => router.push(`/profile/${post.authorUserName}`)}
        >
          @{post.authorUserName}
        </Link>
        <Text color="gray.500" fontWeight="bolder" mr={2}>
          -
        </Text>
        <Text color="gray.500" align="end">
          {new Date(post.createdAt.seconds * 1000).toLocaleDateString("tr-TR")}
        </Text>
      </Flex>
    </Flex>
  )
}

export default BigPost
