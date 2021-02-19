import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

type Props = {
  appliersName: string
  appliersDesc: string
}

const Appliers: React.FC<Props> = ({ appliersName, appliersDesc }) => {
  return (
    <Flex w="581px" h="100%" bgColor="#95E3F8" borderRadius="13px" ml={6} mb={4} direction="row">
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
      <Flex direction="column" align="flex-start" w="60%" h="100%">
        <Text fontWeight="500" textColor="#003848">
          {appliersName}
        </Text>
        <Text textColor="#003848" noOfLines={6}>
          {appliersDesc}
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        w="100px"
        h="auto"
        mt={5}
        ml={2}
        mb={2}
        direction="column"
      >
        <Image src="/cross.svg" cursor="pointer" />
        <Button
          w="116px"
          h="29px"
          bgColor="#20D79E"
          borderRadius="47px"
          textColor="#fff"
          _hover={{ bgColor: "#00FFAA" }}
        >
          Accept
        </Button>
      </Flex>
    </Flex>
  )
}

export default Appliers
