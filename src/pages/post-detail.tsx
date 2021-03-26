import { Flex, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/react"
import Container from "../components/Container"
import Comment from "../components/Post-Detail/Comment"
import Content from "../components/Post-Detail/Content"
import PostInfo from "../components/Post-Detail/PostInfo"
import Profile from "../components/Post-Detail/Profile"
import VoteButton from "../components/VoteButton"

const PostDetail: React.FC = () => {
  return (
    <Container bgSrc="wave1.svg">
      <Flex
        boxShadow="md"
        my={10}
        direction="column"
        p="20px 30px"
        w="1080px"
        h="auto"
        bgColor="#E6F8FD"
        borderRadius={15}
        position="relative"
      >
        <Flex position="relative" direction="column">
          <Content
            category="Startup - Veri Analizi"
            title="Trendyol’da işe girmek istiyorum agalar"
            text="Lorem Ipsum is simply dummy text of the 
             printing and typesetting industry. Lorem Ipsum 
             has been the industry's standard dummy text ever 
             since the 1500s, when an unknown printer took a 
              galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries,
           but also the leap into electronic typesetting, remaining 
           essentially unchanged. It was popularised in the 1960s 
           with the release of Letraset sheets containing Lorem 
           Ipsum passages, and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           and more recently with desktop publishing 
           Lorem Ipsum.including version"
          />
        </Flex>
        <VoteButton top="-24px" right="30px" down={55} up={55} />
      </Flex>
      <Flex my={-2} direction="column" w="1080px" h="auto" bgColor="#transparent" borderRadius={15}>
        <Wrap w="100%">
          <WrapItem
            boxShadow="md"
            borderRadius={15}
            flexDirection="column"
            p="30px 36px"
            flex="6"
            bgColor="#E6F8FD"
            marginBottom="50px"
          >
            <Heading marginBottom={4} size="md" color="#015D78">
              Yorumlar
            </Heading>
            <Stack spacing={5}>
              <Comment
                text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
                rating={13}
                name="emremerta"
                date="14:22 • 22/12/2020"
                type="down"
              />
              <Comment
                text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
                rating={13}
                name="emremerta"
                date="14:22 • 22/12/2020"
                type="up"
              />
              <Comment
                text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            typesetting industry. Lorem Ipsum has been the industry's
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
                rating={13}
                name="emremerta"
                date="14:22 • 22/12/2020"
                type="down"
              />
              <Comment
                text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
                rating={13}
                name="emremerta"
                date="14:22 • 22/12/2020"
                type="down"
              />
              <Comment
                text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
                rating={13}
                name="emremerta"
                date="14:22 • 22/12/2020"
                type="up"
              />
              <Comment
                text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            typesetting industry. Lorem Ipsum has been the industry's
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
                rating={13}
                name="emremerta"
                date="14:22 • 22/12/2020"
                type="down"
              />
            </Stack>
          </WrapItem>
          <WrapItem borderRadius={15} flexDirection="column" flex="2" pl={5}>
            <Profile
              name="Emre Mert Akdağ"
              about="Hayatın heyecanı meyecanı yok bum zıbap ıvj Pide"
              age={21}
              city="Samsun"
              image="user.jpg"
            />
            <PostInfo view={155} investor={55} vote={555} comment={5} />
          </WrapItem>
        </Wrap>
      </Flex>
    </Container>
  )
}

export default PostDetail
