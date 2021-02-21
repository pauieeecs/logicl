import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import ProfileCard from "../ProfileCard"
type Props = {
  title: string
  text: string
  upVote: number
  totalVote: number
  date: string
}
const SmallPost: React.FC<Props> = ({ title, text, upVote, totalVote, date }) => {
  const [showMore, setShowMore] = useState<boolean>(false)
  return (
    <Flex
      w="250px"
      borderRadius="8px"
      h="200px"
      direction="column"
      backgroundColor="#E6F8FD"
      px="8px"
      py="4px"
      _hover={{ bgColor: "#C3F2FF", cursor: "pointer" }}
    >
      <Flex direction="column" justifyContent="space-between" position="relative">
        <Heading fontSize="18px" maxW="180px" noOfLines={1}>
          {title}
        </Heading>
        <Flex pl={2} alignItems="center" position="absolute" align="center" right="8px">
          <Image boxSize={4} src="/up-small.svg" />
          <Text fontWeight="500" textAlign="center" pl={1} fontSize="12px">
            {upVote}
          </Text>
        </Flex>
      </Flex>
      <Text fontSize="16px" mt={1} noOfLines={5}>
        {text}
      </Text>
      <Flex color="gray" direction="column" mt={1} fontSize="12px">
        <Flex
          _hover={{ textDecoration: "underline" }}
          onMouseOver={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
          direction="column"
          zIndex="2"
        >
          <Text>@mehmet sinan topal</Text>
          <Flex hidden={!showMore ? true : false} position="relative">
            <ProfileCard
              userName="Sinan Topal"
              userDesc="lorem ipsum dolor sit amet constectur adipiscing"
            />
          </Flex>
        </Flex>
        {totalVote} votes / {date}
      </Flex>
    </Flex>
  )
}

export default SmallPost
