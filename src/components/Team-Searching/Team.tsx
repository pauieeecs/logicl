import { Flex, Image, Text, Heading, Button, Stack } from "@chakra-ui/react"

interface Props {
  teamName: string
  teamCategory: string
  teamText: string
  teamAppliers: number
  teamAppImg1: string
  teamAppImg2: string
  teamAppImg3: string
}

const Team: React.FC<Props> = ({
  teamAppliers,
  teamText,
  teamCategory,
  teamName,
  teamAppImg1,
  teamAppImg2,
  teamAppImg3,
}) => {
  return (
    <Flex
      p="10px 20px"
      borderRadius="15px"
      border="5px solid #C3F2FF"
      w="600px"
      h="175px"
      bgColor="#E6F8FD"
      direction="column"
    >
      <Heading size="sm">{teamName}</Heading>
      <Text fontSize="8px" color="#878787">
        {teamCategory}
      </Text>
      <Text noOfLines={4} fontSize="12px" mt="3px">
        {teamText}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" mt="10px">
        <Button bgColor="#20D79E" color="#fff" h={8} fontSize="sm">
          Başvur
        </Button>
        <Flex direction="row" alignItems="center">
          <Stack direction="row" spacing={-3}>
            <Image zIndex="3" src={teamAppImg1} boxSize={8} borderRadius={16} />
            <Image zIndex="2" src={teamAppImg2} boxSize={8} borderRadius={16} />
            <Image zIndex="1" src={teamAppImg3} boxSize={8} borderRadius={16} />
          </Stack>
          <Text ml={1} fontSize="12px" color="#C1C1C1">
            ... {teamAppliers - 3} More
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Team
