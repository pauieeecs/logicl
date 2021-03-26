import { Flex, Icon, Text } from "@chakra-ui/react"
type Props = {
  text: string
  rating: number
  name: string
  date: string
  type: string
}
const Comment: React.FC<Props> = ({ type, date, name, text, rating }) => {
  return (
    <Flex position="relative" w="100%" bgColor="#CAECF5" py={2} px={6} borderRadius={15}>
      <Flex direction="column">
        <Text fontSize="sm">{text}</Text>
        <Flex mt={1}>
          <Text marginRight={4} fontSize="xs" color="#9C9C9C">
            @{name}
          </Text>
          <Text fontSize="xs" color="#9C9C9C">
            {date}
          </Text>
        </Flex>
      </Flex>

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
      {type === "up" ? (
        <Icon
          position="absolute"
          left="-14px"
          top="-6px"
          width="29px"
          height="18px"
          viewBox="0 0 29 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.4075 18L14.5 6.87449L25.5925 18L29 14.5749L14.5 0L0 14.5749L3.4075 18Z"
            fill="#003848"
          />
        </Icon>
      ) : (
        <Icon
          position="absolute"
          left="-14px"
          top="-6px"
          width="29px"
          height="18px"
          viewBox="0 0 29 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5925 0L14.5 11.1255L3.4075 0L0 3.4251L14.5 18L29 3.4251L25.5925 0Z"
            fill="#003848"
          />
        </Icon>
      )}
    </Flex>
  )
}

export default Comment
