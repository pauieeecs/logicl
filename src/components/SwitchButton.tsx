import { Button, ButtonGroup } from "@chakra-ui/react"
type Props = {
  button1: string
  button2: string
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}
const Buttons: React.FC<Props> = ({ button1, button2, active, setActive }) => {
  return (
    <ButtonGroup
      mt={2}
      spacing={0}
      bgColor="#fff"
      border="1px solid #1A202C"
      borderRadius="24px"
      w="251px"
    >
      <Button
        w="125px"
        mr="-px"
        colorScheme="#C1C1C1"
        borderRadius="39px"
        isActive={active}
        onClick={() => setActive(!active)}
        isDisabled={active}
        _disabled={{
          bg: "#01BAEF",
          textColor: "#fff",
        }}
        _hover={{
          bg: "#01BAEF",
        }}
        _active={{
          bg: "#01BAEF",
          textColor: "#fff",
        }}
        textColor="#003848"
      >
        {button1}
      </Button>
      <Button
        w="125px"
        mr="-px"
        colorScheme="#C1C1C1"
        borderRadius="39px"
        isActive={!active}
        isDisabled={!active}
        _disabled={{
          bg: "#01BAEF",
          textColor: "#fff",
        }}
        _hover={{
          bg: "#01BAEF",
        }}
        onClick={() => setActive(!active)}
        _active={{
          bg: "#01BAEF",
          textColor: "#fff",
        }}
        textColor="#003848"
      >
        {button2}
      </Button>
    </ButtonGroup>
  )
}

export default Buttons
