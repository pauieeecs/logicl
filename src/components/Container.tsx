import { Flex } from "@chakra-ui/react"
import React from "react"
import Navbar from "./Navbar"

interface Props {
  bgSrc: string
}

const Container: React.FC<Props> = ({ bgSrc, children }) => {
  return (
    <Flex
      width="100%"
      height="100%"
      minH="100vh"
      flexDirection="column"
      alignItems="center"
      backgroundImage={`url(${bgSrc})`}
      bgRepeat="repeat-x"
    >
      <Navbar />
      {children}
    </Flex>
  )
}

export default Container
