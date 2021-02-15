import { Button, ButtonGroup, Image, Text } from "@chakra-ui/react"

const VoteButton: React.FC = () => {
  return (
    <ButtonGroup spacing={4} position="absolute" right="16px" top="-24px">
      <Button
        color="white"
        bgColor="#20D79E"
        w="48px"
        h="48px"
        borderRadius="100%"
        flexDirection="column"
        justifyContent="center"
        _hover={{ bgColor: "green.600" }}
      >
        <Image src="/up.svg" mb={1} /> <Text>21</Text>
      </Button>
      <Button
        color="white"
        bgColor="#E5212D"
        w="48px"
        h="48px"
        borderRadius="100%"
        flexDirection="column"
        justifyContent="center"
        _hover={{ bgColor: "red.700" }}
      >
        <Text>21</Text> <Image src="/down.svg" mt={1} />
      </Button>
    </ButtonGroup>
  )
}

export default VoteButton
