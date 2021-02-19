import { Flex, Text, Heading, Button, AvatarGroup, Avatar } from "@chakra-ui/react"

interface Props {
  teamName: string
  teamCategory: string
  teamText: string
  name: string
  avatar: string
}

const Team: React.FC<Props> = ({ name, avatar, teamText, teamCategory, teamName }) => {
  return (
    <Flex
      paddingX="20px"
      paddingTop="10px"
      paddingBottom="50px"
      borderRadius="15px"
      border="5px solid #C3F2FF"
      w="600px"
      maxH="175px"
      bgColor="#E6F8FD"
      direction="column"
      position="relative"
    >
      <Heading size="sm">{teamName}</Heading>
      <Text fontSize="8px" color="#878787">
        {teamCategory}
      </Text>
      <Text noOfLines={4} fontSize="12px" mt="3px">
        {teamText}
      </Text>

      <Button bottom="10px" position="absolute" bgColor="#20D79E" color="#fff" h={8} fontSize="sm">
        Başvur
      </Button>
      <AvatarGroup position="absolute" bottom="10px" right="15px" size="sm" max={3}>
        <Avatar name={name} src={avatar} />
        <Avatar name={name} src={avatar} />
        <Avatar name={name} src={avatar} />
        <Avatar name={name} src={avatar} />
      </AvatarGroup>
    </Flex>
  )
}

export default Team
