import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { useState } from "react"
import Container from "../components/Container"

const CreateTeam: React.FC = () => {
  const [teamName, setTeamName] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")

  return (
    <Container bgSrc="/wave3.svg">
      <Flex direction="column" align="space-around" color="#065E77" opacity="0.9">
        <Flex justifyContent="center" mt={8} direction="column">
          <Heading fontWeight="800" letterSpacing="wider">
            EKİBİNİ OLUŞTUR PROJENİ GELİŞTİR
          </Heading>
          <Text opacity="0.8" mt={2} fontWeight="500" fontSize="20px">
            Hemen şimdi ekibini oluştur ve yeni çalışma arkadaşları aramaya başla
          </Text>
        </Flex>
        <Flex
          w="720px"
          minH="480px"
          my={24}
          bgColor="#E6F8FD"
          borderRadius="10px"
          border="4px solid #C3F2FF"
          direction="column"
        >
          <Flex mx={6} my={4} direction="column">
            <Heading fontSize="24px" letterSpacing="widest">
              Ekip Oluştur
            </Heading>
            <FormControl my={4}>
              <FormLabel mt={6}>Ekip Adı</FormLabel>
              <Input
                isRequired
                h="36px"
                type="name"
                placeholder="Ekibinizin adı"
                onChange={(e) => setTeamName(e.target.value)}
                value={teamName}
              ></Input>
              <FormLabel mt={6}>Kategoriler</FormLabel>
              <RadioGroup onChange={(e) => setCategory(`${e}`)} value={category}>
                <Stack direction="row">
                  <Radio value="Web">Web</Radio>
                  <Radio value="Mobil">Mobil</Radio>
                  <Radio value="Design">Design</Radio>
                </Stack>
              </RadioGroup>
              <FormLabel mt={6}>Açıklama</FormLabel>
              <Textarea
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                isRequired
                placeholder="Minimum 100 karakter"
              ></Textarea>
              {console.log(teamName, desc, category)}
              <Flex mt={6} justify="flex-end">
                <Button
                  disabled={
                    desc.length >= 100 && teamName.length >= 3 && category !== "" ? false : true
                  }
                  bgColor="#20D79E"
                  _hover={{ bgColor: "green.600" }}
                  color="white"
                >
                  Oluştur
                </Button>
              </Flex>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CreateTeam
