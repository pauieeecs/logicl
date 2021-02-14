import React from "react"
import Link from "next/link"
import { Flex, HStack, Image, Text } from "@chakra-ui/react"

const Navbar: React.FC = () => {
  return (
    <Flex width="100%" height="64px" justifyContent="center" flexDirection="row">
      <Flex
        width="1080px"
        height="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Text fontSize="40px" fontWeight="500">
          <Link href="/">logicl</Link>
        </Text>

        <HStack spacing={4} mb={2}>
          <Link href="/addidea">
            <Image cursor="pointer" boxSize={8} src="/plus.svg" />
          </Link>
          <Link href="/notifications">
            <Image cursor="pointer" boxSize={8} src="/bell.svg" />
          </Link>
          <Link href="/profile">
            <Image cursor="pointer" boxSize={8} src="/profile.svg" />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Navbar
