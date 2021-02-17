import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import Container from "../components/Container"
import { useAuth } from "../context/authentication"
import { UserSignin, UserSignup } from "../types/authTypes"
import { getYearsArray } from "../utils/getYearList"

const Auth: React.FC = () => {
  const { user, signin, signup, loading } = useAuth()

  const toast = useToast()
  const router = useRouter()

  const [signinData, setSigninData] = useState<UserSignin>({ email: "", password: "" })
  const [signupData, setSignupData] = useState<UserSignup>({
    email: "",
    password: "",
    fullName: "",
    birthYear: 0,
  })

  const handleSignin = (): void => {
    const { email, password } = signinData
    if (email === "" || password === "" || password.length < 5 || email.length < 6) return
    signin(email, password, "/")
    setSigninData({ email: "", password: "" })
  }

  const handleSignup = (): void => {
    const { email, password, fullName, birthYear } = signupData
    if (
      email === "" ||
      password === "" ||
      password.length < 5 ||
      email.length < 6 ||
      fullName.length < 3 ||
      birthYear === 0
    )
      return

    signup(email, password, fullName, birthYear, "/")
    setSignupData({
      email: "",
      password: "",
      fullName: "",
      birthYear: 0,
    })
  }

  if (!loading && user !== null) {
    router.push("/profile")
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
            Giriş yap
          </Heading>
          <FormControl mt={4}>
            <FormLabel fontWeight="500" color="#065E77" fontSize="24px">
              E-posta
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="john@example.com"
              type="email"
              id="signin-mail"
              onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Şifre
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="johnloveskatie2021"
              type="password"
              id="signin-password"
              onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
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
            onClick={handleSignin}
            isLoading={loading}
          >
            Giriş yap
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
            isLoading={loading}
          >
            GitHub ile giriş yap
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
            isLoading={loading}
          >
            Google ile giriş yap
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
            Kayıt ol
          </Heading>
          <FormControl mt={4}>
            <FormLabel fontWeight="500" color="#065E77" fontSize="24px">
              E-posta
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="john@example.com"
              type="email"
              id="signup-mail"
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Şifre
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="johnloveskatie2021"
              type="password"
              id="signup-password"
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Ad soyad
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="John Doe"
              type="text"
              id="signup-fullname"
              onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="24px">
              Doğum Yılı
            </FormLabel>
            <Select
              focusBorderColor="#B3EBFA"
              placeholder="Doğum tarihi"
              onChange={(e) =>
                setSignupData({ ...signupData, birthYear: parseInt(e.target.value) })
              }
            >
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
            onClick={handleSignup}
            isLoading={loading}
          >
            Kayıt ol
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
            isLoading={loading}
          >
            GitHub ile kayıt ol
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
            isLoading={loading}
          >
            Google ile kayıt ol
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Auth
