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
      border="4px solid #00BAEF"
      borderRadius={24}
      w="240px"
    >
      <Button
        ml="-1px"
        w="120px"
        colorScheme="#C1C1C1"
        borderRadius={24}
        isActive={active}
        onClick={() => setActive(!active)}
        isDisabled={active}
        _disabled={{
          bg: "#01BAEF",
          textColor: "#fff",
        }}
        _hover={{
          bg: "#01BAEF",
          textColor: "#fff",
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
        mr="-1px"
        w="120px"
        borderRadius={24}
        colorScheme="#C1C1C1"
        isActive={!active}
        isDisabled={!active}
        _disabled={{
          bg: "#01BAEF",
          textColor: "#fff",
        }}
        _hover={{
          bg: "#01BAEF",
          textColor: "#fff",
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
