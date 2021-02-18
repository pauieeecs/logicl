import { CalendarIcon } from "@chakra-ui/icons"
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"

type Props = {
  name: string
  location: string
  job: string
  bio: string
  joinedAt: string
}

const Profile: React.FC<Props> = ({ name, location, job, bio, joinedAt }) => {
  return (
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
          w="140px"
          h="140px"
          borderRadius="325px"
          backgroundColor="#01BAEF"
          mt={8}
        >
          <Avatar size="2xl" name={name} src="https://bit.ly/dan-abramov" />
        </Flex>

        <Heading textColor="#003848" my={6}>
          {name}
        </Heading>
        <Text textColor="#015D78" fontSize="24px">
          {location}
        </Text>
        <Text textColor="#015D78" fontSize="24px">
          {job}
        </Text>
        <Text textColor="#015D78" fontSize="24px" mx={24} noOfLines={2}>
          {bio}
        </Text>
      </Flex>
      <Flex align="flex-end" justify="flex-end" h="100%" mr="8px">
        <Text textColor="#91AEB7">
          <CalendarIcon mr="6px" />
          joined in {joinedAt}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Profile
