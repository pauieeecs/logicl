import { Flex, Text, Heading, Button, Avatar, Stack } from "@chakra-ui/react"

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
      boxShadow="md"
      paddingX="20px"
      paddingTop="10px"
      paddingBottom="50px"
      borderRadius="15px"
      border="5px solid #C3F2FF"
      w="720px"
      maxH="230px"
      bgColor="#E6F8FD"
      direction="column"
      position="relative"
    >
      <Heading size="lg">{teamName}</Heading>
      <Text fontSize="12px" color="#878787">
        {teamCategory}
      </Text>
      <Text noOfLines={5} fontSize="14px" mt="3px">
        {teamText}
      </Text>

      <Button
        bottom="10px"
        _hover={{ bgColor: "green.600" }}
        position="absolute"
        bgColor="#20D79E"
        color="#fff"
        h={8}
        fontSize="sm"
      >
        Başvur
      </Button>
      <Stack direction="row" position="absolute" bottom="10px" right="15px" spacing="-7px">
        <Avatar zIndex="3" size="sm" name={name} src={avatar} />
        <Avatar zIndex="2" size="sm" name={name} src={avatar} />
        <Avatar zIndex="1" size="sm" name={name} src={avatar} />
        <Text
          d="flex"
          justifyContent="center"
          alignItems="center"
          width="32px"
          height="32px"
          borderRadius="16px"
          bgColor="#E2E8F0"
        >
          +3
        </Text>
      </Stack>
    </Flex>
  )
}

export default Team
