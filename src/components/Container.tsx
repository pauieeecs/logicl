import { Flex } from "@chakra-ui/react"
import React from "react"
import Navbar from "./Navbar"

type Props = {
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
    >
      <Navbar />
      {children}
    </Flex>
  )
}

export default Container
