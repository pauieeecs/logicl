import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { IdeaShort } from "../../types/idea"

type Props = {
  smallPost: IdeaShort
  isLast: boolean
}
const SmallPost: React.FC<Props> = ({ smallPost, isLast }) => {
  const router = useRouter()
  return (
    <Flex
      flex="1"
      borderRadius={6}
      h="200px"
      direction="column"
      backgroundColor="#E6F8FD"
      p={4}
      _hover={{ bgColor: "#C3F2FF", cursor: "pointer" }}
      justifyContent="space-between"
      mr={isLast ? 0 : 2}
    >
      <Flex
        flexDirection="column"
        height="100%"
        onClick={() => router.push(`/post/${smallPost.slug}`)}
      >
        <Flex width="100%" direction="column" justifyContent="space-between" position="relative">
          <Heading fontSize="18px" maxW="180px" noOfLines={1}>
            {smallPost.title}
          </Heading>
          <Flex ml={2} alignItems="center" position="absolute" align="center" right="8px">
            <Image boxSize={4} src="/up-small.svg" />
            <Text fontWeight="500" textAlign="center" pl={1} fontSize="12px">
              {smallPost.upVote}
            </Text>
          </Flex>
        </Flex>
        <Text fontSize="16px" mt={1} noOfLines={3} overflowY="hidden">
          {smallPost.shortDesc}
        </Text>
      </Flex>

      <Flex color="gray" direction="row" mt={1} fontSize="12px" justifyContent="space-between">
        <Link
          color="gray.500"
          fontWeight="400"
          zIndex="100"
          onClick={() => router.push(`/profile/${smallPost.authorUserName}`)}
        >
          @{smallPost.authorUserName}
        </Link>
        <Text color="gray.500" fontWeight="400">
          {smallPost.totalVote} oy -{" "}
          {new Date(smallPost.createdAt.seconds * 1000).toLocaleDateString("tr-TR")}
        </Text>
      </Flex>
    </Flex>
  )
}

export default SmallPost
