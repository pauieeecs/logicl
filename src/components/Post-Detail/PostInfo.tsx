import { Flex, Text } from "@chakra-ui/react"
type Props = {
  view: number
  investor: number
  vote: number
  comment: number
}
const PostInfo: React.FC<Props> = ({ view, investor, vote, comment }) => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      bgColor="#E6F8FD"
      mt={6}
      borderRadius={15}
      padding={5}
    >
      <Text>{view} Görüntülenme</Text>
      <Text>{investor} Yatırımcı bu fikre baktı</Text>
      <Text>{vote} Kişi oyladı</Text>
      <Text>{comment} Kişi yorum yaptı</Text>
    </Flex>
  )
}

export default PostInfo
