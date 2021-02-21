import { Button, Flex, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import Container from "../components/Container"

const ApplyTeam: React.FC = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [desc, setDesc] = useState<string>("")
  const [city, setCity] = useState<string>("")

  const valid = (
    name: string,
    email: string,
    desc: string,
    phoneNumber: string,
    city: string
  ): boolean => {
    if (
      name.length < 3 ||
      email.length < 8 ||
      desc.length < 100 ||
      city.length < 3 ||
      phoneNumber.length !== 11
    ) {
      return false
    } else {
      return true
    }
  }

  return (
    <Container bgSrc="/wave3.svg">
      <Flex mt={3} color="#065E77" direction="column" align="center" opacity="0.9">
        <Flex direction="column" w="720px">
          <Heading fontWeight="800" letterSpacing="wider" textAlign="center">
            BAŞVURUNU YAP EKİP OLARAK ÇALIŞMA ŞANSI YAKALA
          </Heading>
        </Flex>
        <FormControl
          boxShadow="md"
          my={24}
          w="720px"
          minH="480px"
          bgColor="#E6F8FD"
          py={3}
          px={6}
          borderRadius="10px"
          border="4px solid #C3F2FF"
        >
          <Heading fontSize="24px" letterSpacing="wider">
            Başvuru Yap
          </Heading>
          <Flex mt={3}>
            <Flex direction="column" mr="16px" w="48%">
              <FormLabel>Ad Soyad</FormLabel>
              <Input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız ve Soyadınız"
              ></Input>
            </Flex>
            <Flex direction="column" w="48%">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email adresiniz"
              ></Input>
            </Flex>
          </Flex>

          <Flex mt={3}>
            <Flex direction="column" mr="24px" w="48%">
              <FormLabel>Şehir</FormLabel>
              <Input
                type="text"
                placeholder="Yaşadığınız şehir"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></Input>
            </Flex>
            <Flex direction="column" w="48%">
              <FormLabel>Telefon numarası</FormLabel>
              <Input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Örn: 0555 555 55 55"
              ></Input>
            </Flex>
          </Flex>
          <Flex direction="column" mt={3}>
            <FormLabel>Kendiniz Bahseder Misiniz?</FormLabel>
            <Textarea
              minH="150px"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Minimum 100 karakter"
            ></Textarea>
          </Flex>
          <Flex mt={3} justifyContent="flex-end">
            <Button
              disabled={!valid(name, email, desc, phoneNumber, city) ? true : false}
              bgColor="#20D79E"
              _hover={{ bgColor: "green.600" }}
              color="white"
            >
              Başvur
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </Container>
  )
}

export default ApplyTeam
