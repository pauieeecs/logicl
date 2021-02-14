import { Flex, Heading, Image, Text } from "@chakra-ui/react"

const ProfileCard: React.FC = () => {
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
        h="64px"
        ml={-4}
        px={4}
        direction="column"
        bgColor="#035269"
        justify="center"
        borderRightRadius="32px"
      >
        <Heading mx={1} fontSize="14px">
          Sinan Topal
        </Heading>
        <Text mx={1} noOfLines={2}>
          Lorem ipsum dolor sit amet ama yine de emin deilim gdghawd awdjfwadgawd dahwfdawhd
          awhdwavdhwav .d
        </Text>
      </Flex>
    </Flex>
  )
}

export default ProfileCard
