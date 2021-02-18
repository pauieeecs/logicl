import { Flex, Heading, Image, Text } from "@chakra-ui/react"

type Props = {
  userName: string
  userDesc: string
}

const ProfileCard: React.FC<Props> = ({ userName, userDesc }) => {
  return (
    <Flex position="absolute" alignItems="center" p={1} color="white">
      <Image
        src="/avatar.jpg"
        borderRadius="100%"
        boxSize={24}
        border="6px solid #035269"
        zIndex="1"
      />
      <Flex
        w="300px"
        h="68px"
        ml={-4}
        px={4}
        direction="column"
        bgColor="#035269"
        justify="center"
        borderRightRadius="36px"
      >
        <Heading mx={1} fontSize="16px">
          {userName}
        </Heading>
        <Text mx={1} fontSize="12px" noOfLines={2}>
          {userDesc}
        </Text>
      </Flex>
    </Flex>
  )
}

export default ProfileCard
