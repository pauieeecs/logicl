import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import SmallPost from "./SmallPost"
import BigPost from "./BigPost"
const List: React.FC = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.including version.."
  return (
    <Flex direction="column" w="100%" align="center">
      <Flex w="1080px" mt={10} justify="space-between">
        <SmallPost title="denme" text={text} upVote={12} totalVote={21} date="14:25 - 21/11/2021" />
        <SmallPost title="denme" text={text} upVote={12} totalVote={21} date="14:25 - 21/11/2021" />
        <SmallPost title="denme" text={text} upVote={12} totalVote={21} date="14:25 - 21/11/2021" />
        <SmallPost title="denme" text={text} upVote={12} totalVote={21} date="14:25 - 21/11/2021" />
      </Flex>
      <Flex mt={6} width="1080px" height="60px" bgColor="#01A7D7" borderRadius="6px"></Flex>
      <Wrap w="1080px" spacing={4}>
        <WrapItem flex="6" mt={12} flexDirection="column">
          <BigPost
            category="lorem"
            title="muvaffakiyetsizleştiribiliveremeyeceklerimizdenmişsinizcesine"
            text={text}
            date="15:25 - 12/14/2020"
          />
          <BigPost category="lorem" title="deneme" text={text} date="15:25 - 12/14/2020" />
          <BigPost category="lorem" title="deneme" text={text} date="15:25 - 12/14/2020" />
          <BigPost category="lorem" title="deneme" text={text} date="15:25 - 12/14/2020" />
        </WrapItem>
        <WrapItem
          flexDirection="column"
          flex="2"
          borderRadius="6px"
          alignItems="center"
          h="940px"
          mt={12}
          bgColor="#E6F8FD"
          boxShadow="md"
        >
          <Flex direction="column" py={4} borderBottom="2px solid black" align="center">
            <Heading my={2} fontSize="20px">
              Most Interected Ideas
            </Heading>
            <SmallPost
              title="denme"
              text={text}
              upVote={12}
              totalVote={21}
              date="14:25 - 21/11/2021"
            />
            <SmallPost
              title="denme"
              text={text}
              upVote={12}
              totalVote={21}
              date="14:25 - 21/11/2021"
            />
          </Flex>
          <Flex direction="column" my={4} align="center">
            <Heading my={2} fontSize="20px">
              Most Upvoted Feedbacks
            </Heading>
            <SmallPost
              title="denme"
              text={text}
              upVote={12}
              totalVote={21}
              date="14:25 - 21/11/2021"
            />
            <SmallPost
              title="denme"
              text={text}
              upVote={12}
              totalVote={21}
              date="14:25 - 21/11/2021"
            />
          </Flex>
        </WrapItem>
      </Wrap>
    </Flex>
  )
}

export default List
