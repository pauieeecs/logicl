import { Flex, Heading, Text } from "@chakra-ui/react"
type Props = {
  title: string
  text: string
  vote: number
  date: string
}
const SmallPost: React.FC<Props> = ({ title, text, vote, date }) => {
  return (
    <Flex
      w="266px"
      borderRadius="8px"
      h="160px"
      bgColor="red"
      direction="column"
      backgroundColor="#E6F8FD"
      _hover={{ bgColor: "#C3F2FF", cursor: "pointer" }}
    >
      <Flex mx={3} my={2} direction="column">
        <Heading fontSize="16px" noOfLines={1}>
          {title}
        </Heading>
        <Text fontSize="14px" noOfLines={5}>
          {text}
        </Text>
        <Text opacity="0.5" mt={1} fontSize="12px">
          username / {vote} votes / {date}
        </Text>
      </Flex>
    </Flex>
  )
}

export default SmallPost
