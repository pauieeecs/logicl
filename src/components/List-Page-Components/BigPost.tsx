import { Flex, Heading, Text } from "@chakra-ui/react"

type Props = {
  category: string
  title: string
  text: string
  date: string
}

const BigPost: React.FC<Props> = ({ category, title, text, date }) => {
  return (
    <Flex w="100%" h="266px" borderRadius="6px" mb={8} bgColor="#E6F8FD">
      <Flex mx={2} direction="column">
        <Text my={1} fontWeight="bold">
          {category}
        </Text>
        <Flex>
          <Heading fontSize="28px">{title}</Heading>
          <Text mx={2} my="auto" justifyContent="center" opacity="0.7">
            username
          </Text>
        </Flex>
        <Text fontSize="18px" mt={1} noOfLines={6}>
          {text}
        </Text>
        <Text opacity="0.5" fontWeight="bold" align="end" mt={2}>
          {date}
        </Text>
      </Flex>
    </Flex>
  )
}

export default BigPost
