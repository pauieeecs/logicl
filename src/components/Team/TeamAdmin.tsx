import { Avatar, Flex, Input, Text, Textarea } from "@chakra-ui/react"
import React, { useState } from "react"
import { CalendarIcon, EditIcon } from "@chakra-ui/icons"

type Props = {
  teamName: string
  teamDescription: string
  teamCreatedAt: string
}

const TeamAdmin: React.FC<Props> = ({ teamCreatedAt, teamDescription, teamName }) => {
  const [name, setName] = useState(teamName)
  const [desc, setDesc] = useState(teamDescription)

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
      <Flex justify="center" align="center" direction="column">
        <Flex
          justify="center"
          align="center"
          w="140px"
          h="140px"
          borderRadius="325px"
          backgroundColor="#01BAEF"
          mt={8}
        >
          <Avatar size="2xl" name="kerem esen" src="https://bit.ly/dan-abramov" pos="absolute" />
          <EditIcon
            pos="relative"
            cursor="pointer"
            top="35%"
            bgColor="#01BAEF"
            left="40%"
            borderRadius="200px"
            w="20px"
            h="15px"
          />
        </Flex>
        <Input
          value={name}
          size="sm"
          textColor="#015D78"
          width="30%"
          my={6}
          onChange={(e) => setName(e.target.value)}
          border="3px solid #000"
        />

        <Textarea
          h={desc.length / 3 + "px"}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          size="sm"
          textColor="#015D78"
          align="center"
          maxH="200px"
          width="70%"
          border="3px solid black"
        />
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

export default TeamAdmin
