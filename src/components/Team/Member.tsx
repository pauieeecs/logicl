import { Avatar, Flex, Text } from "@chakra-ui/react"
import React from "react"

type Props = {
  memberName: string
  memberBio: string
}

const Member: React.FC<Props> = ({ memberName, memberBio }) => {
  return (
    <Flex
      w="581px"
      h="94px"
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
      <Flex direction="column" align="flex-start" w="60%" h="80%">
        <Text fontWeight="500" textColor="#003848">
          {memberName}
        </Text>
        <Text textColor="#003848" noOfLines={2}>
          {memberBio}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Member
