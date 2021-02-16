import { Avatar, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Container from "../components/Container"
import { CalendarIcon } from "@chakra-ui/icons"
import React from "react"
import Idea from "../components/profile/Idea"

const profile: React.FC = () => {
  return (
    <Container bgSrc="/wave1.svg">
      <Flex
        w="976px"
        borderRadius="8px"
        h="539px"
        backgroundColor="#E6F8FD"
        my={6}
        direction="column"
      >
        <Flex justify="center" align="center" direction="column">
          <Flex
            justify="center"
            align="center"
            w="150px"
            h="150px"
            borderRadius="325px"
            backgroundColor="#01BAEF"
            mt={8}
          >
            <Avatar size="2xl" name="Kerem Esen" src="https://bit.ly/dan-abramov" />
          </Flex>

          <Heading textColor="#003848" my={6}>
            Kerem Esen
          </Heading>
          <Text textColor="#015D78" fontSize="24px">
            Manisa
          </Text>
          <Text textColor="#015D78" fontSize="24px">
            Developer
          </Text>
          <Text textColor="#015D78" fontSize="24px" mx={24} noOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus justo, maximus
            id gravida vitae, placerat vel dui. Sed ornare iaculis sagittis. Integer scelerisque
            tortor id est elementum, in iaculis urna sollicitudin. Aenean sit amet vehicula libero,
            nec sodales ipsum. Nulla pharetra porta libero. Donec consectetur diam ut massa euismod
            convallis. Duis blandit interdum tempor. Ut sed elementum arcu, id posuere nibh. Nullam
            pretium euismod purus, ut ultrices leo hendrerit scelerisque.
          </Text>
        </Flex>
        <Flex align="flex-end" justify="flex-end" h="100%" mr="8px">
          <Text
            textColor="#91AEB7;
"
          >
            <CalendarIcon mr="6px" />
            joined in 01.31.2021
          </Text>
        </Flex>
      </Flex>
      <Flex
        w="976px"
        h="726px"
        borderRadius="8px"
        bgColor="#E6F8FD"
        direction="column"
        align="center"
      >
        <Heading>ideas / comments</Heading>
        <Idea />
        <Idea />
        <Idea />
        <Image src="/profile-down.svg" cursor="pointer"></Image>
        <Image src="/profile-down.svg" cursor="pointer"></Image>
        <Image src="/profile-down.svg" cursor="pointer"></Image>
      </Flex>
    </Container>
  )
}

export default profile
