import { Button, ButtonGroup } from "@chakra-ui/react"
import { useState } from "react"

const Buttons: React.FC = () => {
  const [lastClick, setLastClick] = useState("")
  return (
    <ButtonGroup
      mt={2}
      spacing={0}
      bgColor="#efefef"
      border="1px solid #003848"
      borderRadius="22px"
      w="200px"
    >
      <Button
        onClick={() => setLastClick("Shuffle")}
        bgColor={lastClick === "Shuffle" ? "#01A7D7" : "#efefef"}
        borderRadius="20px"
        w="100px"
      >
        Shuffle
      </Button>
      <Button
        onClick={() => setLastClick("List")}
        bgColor={lastClick === "List" ? "#01A7D7" : "#efefef"}
        borderRadius="20px"
        w="100px"
      >
        List
      </Button>
    </ButtonGroup>
  )
}

export default Buttons
