import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

type Props = {
  memberName: string
  memberBio: string
}

const MemberAdmin: React.FC<Props> = ({ memberName, memberBio }) => {
  return (
    <Flex
      w="581px"
      h="100%"
      bgColor="#95E3F8"
      borderRadius="13px"
      ml={6}
      mb={4}
      justify="flex-start"
      align="center"
      direction="row"
    >
      <Flex
        w="73px"
        h="73px"
        borderRadius="320px"
        bgColor="#01BAEF"
        justify="center"
        align="center"
        m={4}
      >
        <Avatar size="lg" name="kerem esen" src="https://bit.ly/dan-abramov" />
      </Flex>
      <Flex direction="column" align="flex-start" w="80%" h="100%">
        <Text fontWeight="500" textColor="#003848">
          {memberName}
        </Text>
        <Text textColor="#003848" noOfLines={2}>
          {memberBio}
        </Text>
        <Flex h="100%" w="100%" justify="flex-end" align="flex-end">
          <Button
            bgColor="#D72020"
            w="76px"
            h="29px"
            borderRadius="47px"
            textColor="#fff"
            my={2}
            fontSize="sm"
            _hover={{ bgColor: "#ff352e" }}
          >
            SİL
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MemberAdmin
