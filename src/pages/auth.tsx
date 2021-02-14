import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
} from "@chakra-ui/react"
import React from "react"
import Container from "../components/Container"

const Auth: React.FC = () => {
  const getYearsArray = (): number[] => {
    const yearStart = 1923
    const yearEnd = new Date().getUTCFullYear()

    const arr: number[] = []

    for (let i = yearStart; i < yearEnd + 1; i++) {
      arr.push(i)
    }

    return arr
  }

  return (
    <Container bgSrc="/wave1.svg">
      <Flex width="1080px" height="100%" flexDirection="row" justifyContent="space-between" py={16}>
        <Flex
          flexDirection="column"
          flex="1"
          borderRadius={6}
          backgroundColor="#E6F8FD"
          border="4px solid #C3F2FF"
          alignItems="center"
          height="100%"
          py={12}
          px={24}
          mr={8}
        >
          <Heading fontWeight="600" fontSize="36px" color="#065E77">
            Sign in
          </Heading>
          <FormControl mt={4}>
            <FormLabel fontWeight="500" color="#065E77" fontSize="24px">
              E-mail
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="john@example.com"
              type="email"
              id="login-mail"
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Password
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="johnloveskatie2021"
              type="password"
              id="login-password"
            />
          </FormControl>
          <Button
            variant="solid"
            backgroundColor="#20D79E"
            color="white"
            mt={4}
            py={2}
            width="85%"
            _hover={{ backgroundColor: "#16BF8B" }}
          >
            Sign in
          </Button>
          <Button
            justifyContent="center"
            leftIcon={<Image boxSize={6} src="/github.svg" />}
            variant="solid"
            backgroundColor="#D5F4FC"
            color="#065E77"
            mt={4}
            width="85%"
            py={2}
            border="2px solid #C3F2FF"
            _hover={{ backgroundColor: "#C6F3FF" }}
          >
            Sign in with GitHub
          </Button>
          <Button
            justifyContent="center"
            leftIcon={<Image boxSize={6} src="/google.svg" />}
            variant="solid"
            backgroundColor="#D5F4FC"
            color="#065E77"
            mt={2}
            width="85%"
            py={2}
            border="2px solid #C3F2FF"
            _hover={{ backgroundColor: "#C6F3FF" }}
          >
            Sign in with Google
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          flex="1"
          borderRadius={6}
          backgroundColor="#E6F8FD"
          border="4px solid #C3F2FF"
          alignItems="center"
          py={12}
          px={24}
          mr={8}
        >
          <Heading fontWeight="600" fontSize="36px" color="#065E77">
            Sign up
          </Heading>
          <FormControl mt={4}>
            <FormLabel fontWeight="500" color="#065E77" fontSize="24px">
              E-mail
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="john@example.com"
              type="email"
              id="login-mail"
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Password
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="johnloveskatie2021"
              type="password"
              id="login-password"
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Full Name
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="John Doe"
              type="password"
              id="login-password"
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Birth Year
            </FormLabel>
            <Select focusBorderColor="#B3EBFA">
              {getYearsArray().map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="solid"
            backgroundColor="#20D79E"
            color="white"
            mt={4}
            py={2}
            width="85%"
            _hover={{ backgroundColor: "#16BF8B" }}
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Auth
