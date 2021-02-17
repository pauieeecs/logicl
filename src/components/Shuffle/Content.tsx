import { Flex, Heading, Text } from "@chakra-ui/react"
type Props = {
  title: string
  text: string
}
const Content: React.FC<Props> = ({ title, text }) => {
  return (
    <Flex direction="column" position="relative">
      <Heading letterSpacing={1} fontWeight="bold" size="xs">
        CATEGORY
      </Heading>
      <Heading letterSpacing={1} my={5} size="lg">
        {title}
      </Heading>
      <Text letterSpacing={1} noOfLines={7}>
        {text}
      </Text>
    </Flex>
  )
}

export default Content
