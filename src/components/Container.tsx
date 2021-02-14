import { Flex, Image } from "@chakra-ui/react"
import React from "react"

interface Props {
  bgSrc: string
}

const Container: React.FC<Props> = ({ bgSrc, children }) => {
  return (
    <Flex width="100%" height="100%" flexDirection="column" alignItems="center">
      <Image src={bgSrc} position="absolute" top="0" left="0" zIndex="-1" />
      {children}
    </Flex>
  )
}

export default Container
