import { Avatar, Button, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { CalendarIcon } from "@chakra-ui/icons"

type Props = {
  teamName: string
  teamDescription: string
  teamCreatedAt: string
}

const Team: React.FC<Props> = ({ teamCreatedAt, teamDescription, teamName }) => {
  return (
    <Flex
      boxShadow="md"
      w="976px"
      h="539px"
      bgColor="#E6F8FD"
      borderRadius="8px"
      my={6}
      direction="column"
    >
      <Flex justify="flex-end" w="100%" h="100%">
        <Button
          bgColor="#20D79E"
          borderRadius="47px"
          w="125px"
          h="46px"
          textColor="#fff"
          m={6}
          pos="absolute"
          _hover={{ bgColor: "#00FFAA" }}
        >
          BAŞVUR
        </Button>
      </Flex>

      <Flex justify="center" align="center" direction="column">
        <Flex
          justify="center"
          align="center"
          w="140px"
          h="140px"
          borderRadius="325px"
          backgroundColor="#01BAEF"
          mt={2}
        >
          <Avatar size="2xl" name="kerem esen" src="https://bit.ly/dan-abramov" />
        </Flex>
        <Heading textColor="#003848" my={6}>
          {teamName}
        </Heading>
        <Text textColor="#015D78" fontSize="24px" align="center" noOfLines={6} width="70%">
          {teamDescription}
        </Text>
      </Flex>
      <Flex align="flex-end" justify="flex-end" h="100%" mr="8px">
        <Text textColor="#91AEB7">
          <CalendarIcon mr="6px" />
          created at {teamCreatedAt}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Team
