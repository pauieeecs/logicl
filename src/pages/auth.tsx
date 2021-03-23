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
import { useRouter } from "next/dist/client/router"
import React, { useMemo, useState } from "react"
import Container from "../components/Container"
import { useAuth } from "../context/authentication"
import { UserSigninEmail, UserSignupEmail } from "../types/authTypes"
import { getYearsArray } from "../utils/getYearList"

const Auth: React.FC = () => {
  const { user, signin, signup, loading, signinWithProvider } = useAuth()

  const router = useRouter()

  const yearsArray = useMemo(getYearsArray, [getYearsArray])

  const [signinData, setSigninData] = useState<UserSigninEmail>({ email: "", password: "" })
  const [signupData, setSignupData] = useState<UserSignupEmail>({
    email: "",
    password: "",
    fullName: "",
    birthDay: 0,
    birthMonth: 0,
    birthYear: 0,
  })

  const handleSignin = (): void => {
    const { email, password } = signinData
    if (email === "" || password === "" || password.length < 5 || email.length < 6) return
    signin(email, password, "/")
    setSigninData({ email: "", password: "" })
  }

  const handleSignup = (): void => {
    const { email, password, fullName, birthYear, birthDay, birthMonth } = signupData
    if (
      email === "" ||
      password === "" ||
      password.length < 5 ||
      email.length < 6 ||
      fullName.length < 3 ||
      birthYear === 0
    )
      return

    signup(email, password, fullName, birthDay, birthMonth, birthYear, "/")
    setSignupData({
      email: "",
      password: "",
      fullName: "",
      birthYear: 0,
      birthMonth: 0,
      birthDay: 0,
    })
  }

  if (!loading && user !== null) {
    router.push("/profile")
  }

  return (
    <Container bgSrc="/wave1.svg">
      <Flex width="1080px" height="100%" flexDirection="row" justifyContent="space-between" py={16}>
        <Flex
          boxShadow="md"
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
            <FormLabel fontWeight="500" color="#065E77" fontSize="16px">
              E-posta
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="E-posta"
              type="email"
              id="signin-mail"
              value={signinData.email}
              onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="16px">
              Şifre
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="Şifre"
              type="password"
              id="signin-password"
              value={signinData.password}
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
            onClick={() => signinWithProvider(true)}
          >
            GitHub ile giriş yap
          </Button>
        </Flex>
        <Flex
          boxShadow="md"
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
            <FormLabel fontWeight="500" color="#065E77" fontSize="16px">
              E-posta
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="E-posta"
              type="email"
              id="signup-mail"
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              value={signupData.email}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="16px">
              Şifre
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="Şifre"
              type="password"
              id="signup-password"
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              value={signupData.password}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="16px">
              Ad soyad
            </FormLabel>
            <Input
              focusBorderColor="#B3EBFA"
              borderRadius={6}
              placeholder="Ad Soyad"
              type="text"
              id="signup-fullname"
              onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
              value={signupData.fullName}
            />
            <FormLabel mt={4} fontWeight="500" color="#065E77" fontSize="16px">
              Doğum Tarihi (gün/ay/yıl)
            </FormLabel>
            <Flex>
              <Select
                focusBorderColor="#B3EBFA"
                placeholder="Gün"
                onChange={(e) =>
                  setSignupData({ ...signupData, birthDay: parseInt(e.target.value) })
                }
                value={signupData.birthDay}
              >
                {day.map((day) => (
                  <option value={day} key={`day-${day}`}>
                    {day}
                  </option>
                ))}
              </Select>
              <Select
                ml={2}
                focusBorderColor="#B3EBFA"
                placeholder="Ay"
                onChange={(e) =>
                  setSignupData({ ...signupData, birthMonth: parseInt(e.target.value) })
                }
                value={signupData.birthMonth}
              >
                {month.map((month) => (
                  <option value={month} key={`month-${month}`}>
                    {month}
                  </option>
                ))}
              </Select>
              <Select
                ml={2}
                focusBorderColor="#B3EBFA"
                placeholder="Yıl"
                onChange={(e) =>
                  setSignupData({ ...signupData, birthYear: parseInt(e.target.value) })
                }
                value={signupData.birthYear}
              >
                {yearsArray.map((year) => (
                  <option value={year} key={`year-${year}`}>
                    {year}
                  </option>
                ))}
              </Select>
            </Flex>
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
            onClick={() => signinWithProvider(true)}
          >
            GitHub ile kayıt ol
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Auth

const day = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
]

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
