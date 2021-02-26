import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

type Props = {
  appliersName: string
  appliersDesc: string
}

const Appliers: React.FC<Props> = ({ appliersName, appliersDesc }) => {
  return (
    <Flex w="581px" h="auto" bgColor="#95E3F8" borderRadius="13px" ml={6} mb={4} direction="row">
      <Flex
        w="73px"
        h="73px"
        borderRadius="320px"
        bgColor="#01BAEF"
        justify="center"
        align="center"
        m={4}
      >
        <Avatar size="lg" name="kerem esen" src="https://bit.ly/dan-abramov" cursor="pointer" />
      </Flex>
      <Flex direction="column" align="flex-start" w="80%" h="100%">
        <Text fontWeight="500" textColor="#003848">
          {appliersName}
        </Text>
        <Text textColor="#003848" noOfLines={6}>
          {appliersDesc}
        </Text>
        <Flex h="auto" w="100%" justify="flex-end" align="flex-end" direction="row">
          <Button
            bgColor="#D72020"
            w="76px"
            h="29px"
            borderRadius="47px"
            textColor="#fff"
            mb={2}
            fontSize="sm"
            _hover={{bgColor: "#ff352e"}}
          >
            SİL
          </Button>
          <Button
            w="116px"
            h="29px"
            bgColor="#20D79E"
            borderRadius="47px"
            textColor="#fff"
            _hover={{ bgColor: "#00FFAA" }}
            mb={2}
            mx={2}
            fontSize="sm"
          >
            ONAYLA
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Appliers
