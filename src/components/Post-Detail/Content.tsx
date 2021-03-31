import { Flex, Heading, Text } from "@chakra-ui/react"
type Props = {
  title: string
  text: string
  category: string
}
const Content: React.FC<Props> = ({ title, text, category }) => {
  return (
    <Flex direction="column" position="relative">
      <Text fontWeight="bold" color="#01A7D7" textTransform="uppercase">
        {category}
      </Text>
      <Heading fontWeight="600" textTransform="capitalize" fontSize="28px">
        {title}
      </Heading>
      <Text fontSize="18px" mt={2} color="gray.600">
        {text}
      </Text>
    </Flex>
  )
}

export default Content
