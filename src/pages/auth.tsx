import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import Container from "../components/Container"

const Auth: React.FC = () => {
  return (
    <Container bgSrc="/wave1.svg">
      <Flex width="1080px" height="100%">
        <Heading fontWeight="500" fontSize="40px" color="#003848" textTransform="uppercase">
          Giriş yap
        </Heading>
      </Flex>
    </Container>
  )
}

export default Auth
