import { Text } from "@chakra-ui/react"
type Props = {
  view: number
  investor: number
  vote: number
  comment: number
}
const PostInfo: React.FC<Props> = ({ view, investor, vote, comment }) => {
  return (
    <>
      <Text>{view} Görüntülenme</Text>
      <Text>{investor} Yatırımcı bu fikre baktı</Text>
      <Text>{vote} Kişi oyladı</Text>
      <Text>{comment} Kişi yorum yaptı</Text>
    </>
  )
}

export default PostInfo
