import { Flex, Icon, Text } from "@chakra-ui/react"
type Props = {
  text: string
  rating: number
}
const Comment: React.FC<Props> = ({ text, rating }) => {
  return (
    <Flex w="100%" bgColor="#CAECF5" py={3} px={5} borderRadius={15}>
      <Text noOfLines={2} fontSize="sm">
        {text}
      </Text>
      <Flex direction="column" justify="center" align="center" px={4}>
        <Icon
          width="29px"
          height="18px"
          viewBox="0 0 29 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.4075 18L14.5 6.87449L25.5925 18L29 14.5749L14.5 0L0 14.5749L3.4075 18Z"
            fill="#01BAEF"
          />
        </Icon>
        <Text>{rating}</Text>
      </Flex>
    </Flex>
  )
}

export default Comment
