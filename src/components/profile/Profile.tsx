import { CalendarIcon } from "@chakra-ui/icons"
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { User } from "../../types/user"

type Props = {
  user: User
}

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <Flex flexDir="column" width="100%" height="100%">
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
          <Avatar size="2xl" name={user.fullName} src={user.photoUrl} />
        </Flex>

        <Heading textColor="#003848" mt={4}>
          {user.fullName}
        </Heading>
        <Text textColor="#015D78" fontWeight="bold" fontSize="18px">
          {user.jobTitle}
        </Text>
        <Text textColor="#015D78" fontSize="18px">
          {user.city !== "" ? `${user.city}/${user.country}` : ""}
        </Text>
        <Text textColor="#015D78" fontSize="24px" mt={4} mx={24} noOfLines={4}>
          {user.bio}
        </Text>
      </Flex>
      <Flex align="flex-end" justify="flex-end" h="100%" mr="8px">
        <Text textColor="#91AEB7">
          <CalendarIcon mr="6px" />
          joined in {new Date(user.joinedAt.seconds * 1000).toLocaleDateString("tr-TR")}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Profile
