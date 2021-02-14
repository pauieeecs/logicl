import { Button, ButtonGroup } from "@chakra-ui/react"
import { useState } from "react"

const Buttons: React.FC = () => {
  const [isList, setIsList] = useState(true)
  return (
    <ButtonGroup
      mt={2}
      spacing={0}
      bgColor="#efefef"
      border="3px solid #003848"
      borderRadius="24px"
      w="200px"
    >
      <Button
        onClick={() => setIsList(false)}
        bgColor={isList === false ? "#01A7D7" : "#efefef"}
        borderRadius="20px"
        w="100px"
      >
        Shuffle
      </Button>

      <Button
        onClick={() => setIsList(true)}
        bgColor={isList === true ? "#01A7D7" : "#efefef"}
        borderRadius="20px"
        w="100px"
      >
        List
      </Button>
    </ButtonGroup>
  )
}

export default Buttons
