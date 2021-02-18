import { Stack, Wrap, WrapItem } from "@chakra-ui/react"
import Comment from "./Comment"
import Profile from "./Profile"

const Comments: React.FC = () => {
  return (
    <Wrap w="100%" mt={4} spacing={5} h="100%">
      <WrapItem flex="5">
        <Stack spacing={5}>
          <Comment
            text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
            rating={13}
          />
          <Comment
            text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
            rating={13}
          />
          <Comment
            text="Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when a"
            rating={13}
          />
        </Stack>
      </WrapItem>
      <WrapItem flex="2">
        <Profile
          name="Emre Mert Akdağ"
          about="Hayatın heyecanı meyecanı yok bum zıbap ıvj Pide"
          age={21}
          city="Samsun"
          image="user.jpg"
        />
      </WrapItem>
    </Wrap>
  )
}

export default Comments
