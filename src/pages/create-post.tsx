import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react"
import { useState } from "react"
import Container from "../components/Container"

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [desc, setDesc] = useState("")
  return (
    <Container bgSrc="/wave1.svg">
      <Flex
        w="720px"
        minH="480px"
        bgColor="#E6F8FD"
        borderRadius="10px"
        border="5px solid #C3F2FF"
        my="auto"
        px="24px"
        py="8px"
        direction="column"
        color="#065E77"
        opacity="0.9"
      >
        <Heading fontSize="28px" letterSpacing="wider">
          Fikir Oluştur
        </Heading>
        <FormControl mt={6}>
          <FormLabel>Başlık</FormLabel>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Başlık giriniz"
          ></Input>
          <FormLabel mt={3}>Kategori</FormLabel>
          <Select
            value={category}
            color={category === "" ? "gray.400" : "black"}
            onChange={(e) => setCategory(`${e.target.value}`)}
            placeholder="Seçiniz"
          >
            <option>Web</option>
            <option>Mobil</option>
            <option>Design</option>
          </Select>
          <FormLabel mt={3}>Açıklama</FormLabel>
          <Textarea
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            minH="140px"
            placeholder="Minimum 100 karakter"
          ></Textarea>
          {console.log(title, category, desc)}
          <Flex mt={2} justifyContent="flex-end">
            <Button
              disabled={desc.length >= 100 && title.length >= 8 && category !== "" ? false : true}
              bgColor="#20D79E"
              _hover={{ bgColor: "green.600" }}
              color="white"
            >
              Oluştur
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </Container>
  )
}

export default CreatePost
