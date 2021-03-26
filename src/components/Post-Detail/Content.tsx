import { Flex, Heading, Text } from "@chakra-ui/react"
type Props = {
  title: string
  text: string
  category: string
}
const Content: React.FC<Props> = ({ title, text, category }) => {
  return (
    <Flex direction="column" position="relative">
      <Heading fontWeight="bold" size="xs">
        {category}
      </Heading>
      <Heading my={5} size="lg">
        {title}
      </Heading>
      <Text fontSize="18px">{text}</Text>
    </Flex>
  )
}

export default Content
