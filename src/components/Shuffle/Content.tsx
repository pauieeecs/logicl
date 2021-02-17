import { Flex, Heading, Text } from "@chakra-ui/react"
type Props = {
  title: string
  text: string
}
const Content: React.FC<Props> = ({ title, text }) => {
  return (
    <Flex direction="column">
      <Heading letterSpacing="2px" fontWeight="bold" size="xs">
        CATEGORY
      </Heading>
      <Heading letterSpacing="2px" my={5} size="lg">
        {title}
      </Heading>
      <Text letterSpacing="2px" noOfLines={8}>
        {text}
      </Text>
    </Flex>
  )
}

export default Content
