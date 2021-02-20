import { Button, ButtonGroup, Image, Text } from "@chakra-ui/react"
type Props = {
  up: number
  down: number
  right: string
  top: string
}
// right="16px" top="-24px"
const VoteButton: React.FC<Props> = ({ right, top, up, down }) => {
  return (
    <ButtonGroup spacing={4} position="absolute" right={right} top={top}>
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
        <Image src="/up.svg" mb={1} /> <Text>{up}</Text>
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
        <Text>{down}</Text> <Image src="/down.svg" mt={1} />
      </Button>
    </ButtonGroup>
  )
}

export default VoteButton
