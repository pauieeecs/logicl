import { Button, ButtonGroup, Link, Text } from "@chakra-ui/react"
import React from "react"
type Props = {
  page: string
}
const Buttons: React.FC<Props> = ({ page }) => {
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
        bgColor={page === "Shuffle" ? "#01A7D7" : "#efefef"}
        _hover={{ bgColor: "#62C5DA" }}
        borderRadius="20px"
        w="50%"
        p="0"
      >
        <Link
          w="100%"
          h="100%"
          _hover={{ textDecoration: "none" }}
          flexDirection="column"
          justifyContent="center"
          href="/shuffle"
          borderRadius="20px"
        >
          <Text my="11px">Shuffle</Text>
        </Link>
      </Button>

      <Button
        bgColor={page === "List" ? "#01A7D7" : "#efefef"}
        borderRadius="20px"
        _hover={{ bgColor: "#62C5DA" }}
        w="50%"
        p="0"
      >
        <Link
          w="100%"
          h="100%"
          _hover={{ textDecoration: "none" }}
          flexDirection="column"
          justifyContent="center"
          href="/"
          borderRadius="20px"
        >
          <Text my="11px">List</Text>
        </Link>
      </Button>
    </ButtonGroup>
  )
}

export default Buttons
