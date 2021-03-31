import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Spinner,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import Container from "../components/Container"
import ImageUpload from "../components/ImageUpload"
import { useAuth } from "../context/authentication"
import slugGenerator from "../utils/slugGenerator"

type Post = {
  title: string
  fullDesc: string
  shortDesc: string
  category: string
  slug: string
  authorUserId: string
  mediaUrl: string
  teamName: string
  teamSlug: string
}

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [desc, setDesc] = useState<string>("")
  const [shortDesc, setShortDesc] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const { user } = useAuth()
  const userLoading = useAuth().loading
  const toast = useToast()
  const router = useRouter()

  const handleSubmit = async (): Promise<void> => {
    if (desc.length < 100 || shortDesc.length < 36 || title.length < 8 || category === "") return

    setLoading(true)
    const post: Post = {
      title: title,
      fullDesc: desc,
      shortDesc: shortDesc,
      category: category,
      slug: slugGenerator(title),
      authorUserId: user.userId,
      mediaUrl: "",
      teamName: "",
      teamSlug: "",
    }

    try {
      await fetch("https://us-central1-logicl.cloudfunctions.net/idea/create", {
        method: "POST",
        body: JSON.stringify(post),
      })
      toast({
        title: "Başarılı.",
        description: "Fikir başarıyla paylaşıldı.",
        status: "success",
        duration: 6000,
        isClosable: true,
      })
      setLoading(false)
      setTitle("")
      setShortDesc("")
      setDesc("")
      setCategory("")
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast({
        title: "Bir hata oluştu.",
        description: err,
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    }
  }

  if (userLoading) {
    return <Spinner size="lg" m="auto" />
  }

  if (!user && !userLoading) {
    router.push("/auth")
  }
  return (
    <Container bgSrc="/wave1.svg">
      <Flex
        w="720px"
        minH="480px"
        bgColor="#E6F8FD"
        borderRadius="10px"
        border="5px solid #C3F2FF"
        my={8}
        px={6}
        py={2}
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
              <FormLabel>Başlık</FormLabel>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                h="32px"
                value={title}
                placeholder="Başlık giriniz"
              />

              <FormLabel mt={6}>Kategori</FormLabel>
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

              <FormLabel mt={6}>Kısa Açıklama</FormLabel>
              <Textarea
                onChange={(e) => setShortDesc(e.target.value)}
                value={shortDesc}
                minH="64px"
                placeholder="Fikrin önizlemesinde görülecek kısım. Boş bırakırsanız otomatik olarak oluşturulur."
              />

              <FormLabel mt={6}>Açıklama</FormLabel>
              <Textarea
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                minH="140px"
                placeholder="Minimum 100 karakter"
              />
              <Flex w="100%" borderRadius="10px" mt={6} direction="column">
                <Flex>
                  <FormLabel my={1} mr={1}>
                    Fotoğraf Yükle
                  </FormLabel>
                  <Text h="24px" my={1} color="gray">
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
              disabled={
                desc.length < 100 || shortDesc.length < 36 || title.length < 8 || category === ""
              }
              bgColor="#20D79E"
              _hover={{ bgColor: "green.600" }}
              color="white"
              onClick={() => handleSubmit()}
              isLoading={loading}
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
