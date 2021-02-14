import { Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import ProfileCard from "../List-Page-Components/ProfileCard"
type Props = {
  title: string
  text: string
  vote: number
  date: string
}
const SmallPost: React.FC<Props> = ({ title, text, vote, date }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <Flex
      w="250px"
      borderRadius="8px"
      h="200px"
      backgroundColor="#E6F8FD"
      _hover={{ bgColor: "#C3F2FF", cursor: "pointer" }}
    >
      <Flex mx={2} my={2} direction="column" justifyContent="space-between">
        <Heading fontSize="18px" noOfLines={1}>
          {title}
        </Heading>
        <Text fontSize="16px" mt={1} noOfLines={5}>
          {text}
        </Text>
        <Flex color="gray" direction="column" mt={1} fontSize="12px">
          <Flex
            _hover={{ textDecoration: "underline" }}
            onMouseOver={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
            direction="column"
          >
            <Text>@mehmet sinan topal</Text>
            <Flex hidden={!showMore ? true : false} position="relative">
              <ProfileCard />
            </Flex>
          </Flex>
          {vote} votes / {date}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SmallPost
