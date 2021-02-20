import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { useState } from "react"
import Container from "../components/Container"
import ImageUpload from "../components/Create-Post/ImageUpload"

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [desc, setDesc] = useState<string>("")

  return (
    <Container bgSrc="/wave1.svg">
      <Flex
        w="720px"
        minH="480px"
        bgColor="#E6F8FD"
        borderRadius="10px"
        border="5px solid #C3F2FF"
        my={8}
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
          <Flex direction="row">
            <Flex direction="column" w="100%">
              <Flex direction="column">
                <FormLabel>Başlık</FormLabel>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  h="32px"
                  value={title}
                  placeholder="Başlık giriniz"
                ></Input>
              </Flex>

              <Flex mt={6} direction="column">
                <FormLabel>Kategori</FormLabel>
                <Select
                  value={category}
                  h="32px"
                  color={category === "" ? "gray.400" : "black"}
                  onChange={(e) => setCategory(`${e.target.value}`)}
                  placeholder="Seçiniz"
                >
                  <option>Web</option>
                  <option>Mobil</option>
                  <option>Design</option>
                </Select>
              </Flex>

              <Flex direction="column" mt={6}>
                <FormLabel>Açıklama</FormLabel>
                <Textarea
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                  minH="140px"
                  placeholder="Minimum 100 karakter"
                ></Textarea>
              </Flex>
              <Flex w="100%" borderRadius="10px" mt={6} direction="column">
                <Flex>
                  <FormLabel my="1" mr="4px">
                    Fotoğraf Yükle
                  </FormLabel>
                  <Text h="24px" my="1" color="gray">
                    (En fazla 5 adet)
                  </Text>
                  <Text fontSize="12px" color="gray">
                    *opsiyonel
                  </Text>
                </Flex>
                <ImageUpload />
              </Flex>
            </Flex>
          </Flex>

          <Flex mt={4} mb={2} justifyContent="flex-end">
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
