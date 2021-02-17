import { Button, ButtonGroup, Flex, Image } from "@chakra-ui/react"
import Container from "../components/Container"
import React, { useState } from "react"
import Idea from "../components/profile/Idea"
import Comment from "../components/profile/Comment"
import Profile from "../components/profile/Profile"

const profile: React.FC = () => {
  const [isActive, setIsActive] = useState(true)
  return (
    <Container bgSrc="/wave1.svg">
      <Profile
        name="Kerem Esen"
        location="Manisa"
        job="Developer"
        bio="Frontentçi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
          gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor
          id est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec
          sodales ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod
          convallis. Duis blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam
          pretium euismod purus, ut ultrices leo hendrerit scelerisque."
        joinedAt="17.02.2021"
      />
      <Flex
        w="976px"
        h="726px"
        borderRadius="8px"
        bgColor="#E6F8FD"
        direction="column"
        align="center"
      >
        <ButtonGroup size="lg" variant="outline" mt={4} isAttached>
          <Button
            w="150px"
            mr="-px"
            colorScheme="#C1C1C1"
            borderRadius="39px"
            isActive={isActive}
            onClick={() => setIsActive(!isActive)}
            isDisabled={isActive}
            _disabled={{
              bg: "#01BAEF",
              textColor: "#fff",
            }}
            _hover={{
              bg: "#01BAEF",
            }}
            _active={{
              bg: "#01BAEF",
              textColor: "#fff",
            }}
          >
            Ideas
          </Button>
          <Button
            w="150px"
            mr="-px"
            colorScheme="#C1C1C1"
            borderRadius="39px"
            isActive={!isActive}
            isDisabled={!isActive}
            _disabled={{
              bg: "#01BAEF",
              textColor: "#fff",
            }}
            _hover={{
              bg: "#01BAEF",
            }}
            onClick={() => setIsActive(!isActive)}
            _active={{
              bg: "#01BAEF",
              textColor: "#fff",
            }}
          >
            Comments
          </Button>
        </ButtonGroup>
        {isActive ? (
          <>
            <Idea
              category="Web"
              title="Trendyolda işe girmek istiyorum agalar"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
      gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
      est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
      ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
      blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
      purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim.
      Nam eu lacinia arcu. Nam aliquam, ipsum at suscipit commodo, mauris eros vestibulum urna,
      sed tempus sapien elit scelerisque enim. Vivamus iaculis quis lacus non pulvinar. Donec
      interdum sem diam, at egestas leo pretium eget. Aliquam posuere, ante in tempus varius,
      lacus nisl lacinia sapien, aliquam ullamcorper tellus ex ut est. Nulla eget elementum dui,
      faucibus faucibus enim. Sed nisi justo, aliquet at tincidunt non, sodales sed lectus. Mauris
      consectetur ante mi. Fusce pretium lorem sem, et accumsan erat congue ac. Quisque pharetra
      ornare scelerisque. Quisque egestas eu velit ultrices tincidunt. Sed auctor massa ac ligula
      ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum."
              date="19.48 15.02.2021"
            />
            <Idea
              category="Mobil"
              title="React native or Flutter ?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
      gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
      est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
      ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
      blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
      purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim.
      Nam eu lacinia arcu. Nam aliquam, ipsum at suscipit commodo, mauris eros vestibulum urna,
      sed tempus sapien elit scelerisque enim. Vivamus iaculis quis lacus non pulvinar. Donec
      interdum sem diam, at egestas leo pretium eget. Aliquam posuere, ante in tempus varius,
      lacus nisl lacinia sapien, aliquam ullamcorper tellus ex ut est. Nulla eget elementum dui,
      faucibus faucibus enim. Sed nisi justo, aliquet at tincidunt non, sodales sed lectus. Mauris
      consectetur ante mi. Fusce pretium lorem sem, et accumsan erat congue ac. Quisque pharetra
      ornare scelerisque. Quisque egestas eu velit ultrices tincidunt. Sed auctor massa ac ligula
      ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum."
              date="19.48 15.02.2021"
            />
            <Idea
              category="Embed Systems"
              title="C is sucks"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
      gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
      est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
      ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
      blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
      purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim.
      Nam eu lacinia arcu. Nam aliquam, ipsum at suscipit commodo, mauris eros vestibulum urna,
      sed tempus sapien elit scelerisque enim. Vivamus iaculis quis lacus non pulvinar. Donec
      interdum sem diam, at egestas leo pretium eget. Aliquam posuere, ante in tempus varius,
      lacus nisl lacinia sapien, aliquam ullamcorper tellus ex ut est. Nulla eget elementum dui,
      faucibus faucibus enim. Sed nisi justo, aliquet at tincidunt non, sodales sed lectus. Mauris
      consectetur ante mi. Fusce pretium lorem sem, et accumsan erat congue ac. Quisque pharetra
      ornare scelerisque. Quisque egestas eu velit ultrices tincidunt. Sed auctor massa ac ligula
      ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum."
              date="19.48 15.02.2021"
            />
          </>
        ) : (
          <>
            <Comment
              category="Web"
              title="Trendyolda işe girmek istiyorum agalar"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
      gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
      est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
      ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
      blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
      purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim.
      Nam eu lacinia arcu. Nam aliquam, ipsum at suscipit commodo, mauris eros vestibulum urna,
      sed tempus sapien elit scelerisque enim. Vivamus iaculis quis lacus non pulvinar. Donec
      interdum sem diam, at egestas leo pretium eget. Aliquam posuere, ante in tempus varius,
      lacus nisl lacinia sapien, aliquam ullamcorper tellus ex ut est. Nulla eget elementum dui,
      faucibus faucibus enim. Sed nisi justo, aliquet at tincidunt non, sodales sed lectus. Mauris
      consectetur ante mi. Fusce pretium lorem sem, et accumsan erat congue ac. Quisque pharetra
      ornare scelerisque. Quisque egestas eu velit ultrices tincidunt. Sed auctor massa ac ligula
      ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum."
              date="19.48 15.02.2021"
              commentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
              gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
              est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
              ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
              blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
              purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim."
              commentAuthorFullName="@keremesen"
              commentCreatedAt="06.15 17.02.2021"
            />
            <Comment
              category="Mobil"
              title="React native or Flutter ?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
      gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
      est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
      ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
      blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
      purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim.
      Nam eu lacinia arcu. Nam aliquam, ipsum at suscipit commodo, mauris eros vestibulum urna,
      sed tempus sapien elit scelerisque enim. Vivamus iaculis quis lacus non pulvinar. Donec
      interdum sem diam, at egestas leo pretium eget. Aliquam posuere, ante in tempus varius,
      lacus nisl lacinia sapien, aliquam ullamcorper tellus ex ut est. Nulla eget elementum dui,
      faucibus faucibus enim. Sed nisi justo, aliquet at tincidunt non, sodales sed lectus. Mauris
      consectetur ante mi. Fusce pretium lorem sem, et accumsan erat congue ac. Quisque pharetra
      ornare scelerisque. Quisque egestas eu velit ultrices tincidunt. Sed auctor massa ac ligula
      ultrices, ac tristique lectus accumsan. Donec gravida scelerisque elementum."
              date="19.48 15.02.2021"
              commentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus id
              gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque tortor id
              est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero, nec sodales
              ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod convallis. Duis
              blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam pretium euismod
              purus, ut ultrices leo hendrerit scelerisque. Praesent nec imperdiet orci, et pretium enim."
              commentAuthorFullName="@keremesen"
              commentCreatedAt="06.15 17.02.2021"
            />
          </>
        )}
        <Image src="/profile-down.svg" cursor="pointer"></Image>
        <Image src="/profile-down.svg" cursor="pointer"></Image>
        <Image src="/profile-down.svg" cursor="pointer"></Image>
      </Flex>
    </Container>
  )
}

export default profile
