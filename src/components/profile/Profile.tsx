import { CalendarIcon, EditIcon } from "@chakra-ui/icons"
import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { User } from "../../types/user"
import firebase from "../../libs/firebase"

type Props = {
  user: User
  isSameUser: boolean
}

const Profile: React.FC<Props> = ({ user, isSameUser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [fullName, setFullName] = useState<string>(user.fullName)
  const [jobTitle, setJobTitle] = useState<string>(user.jobTitle)
  const [bio, setBio] = useState<string>(user.bio)
  const [city, setCity] = useState<string>(user.city)
  const [country, setCountry] = useState<string>(user.country)

  const [loading, setLoading] = useState<boolean>(false)

  const toast = useToast()

  const handleUpdate = async (): Promise<void> => {
    try {
      setLoading(true)
      await firebase.firestore().collection("user").doc(user.userId).update({
        fullName: fullName,
        jobTitle: jobTitle,
        bio: bio,
        city: city,
        country: country,
      })
      toast({
        title: "İşlem başarılı.",
        description: "Profil başarıyla güncellendi.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
      onClose()
    } catch (err) {
      console.log(err)
      toast({
        title: "Bir şeyler ters gitti.",
        description: err,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }
  return (
    <Flex flexDir="column" width="100%" height="100%">
      <Flex justify="center" align="center" direction="column">
        <Flex
          justify="center"
          align="center"
          w="140px"
          h="140px"
          borderRadius="70px"
          backgroundColor="#01BAEF"
          mt={8}
        >
          <Avatar size="2xl" name={user.fullName} src={user.photoUrl} />
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Profilini güncelle</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Ad Soyad</FormLabel>
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>İş Ünvanı</FormLabel>
                <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Biyografi</FormLabel>
                <Textarea value={bio} onChange={(e) => setBio(e.target.value)} resize="none" />
              </FormControl>
              <Flex flexDirection="row" mt={2}>
                <Flex mr={4}>
                  <FormControl>
                    <FormLabel>Ülke</FormLabel>
                    <Input value={country} onChange={(e) => setCountry(e.target.value)} />
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl>
                    <FormLabel>Şehir</FormLabel>
                    <Input value={city} onChange={(e) => setCity(e.target.value)} />
                  </FormControl>
                </Flex>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Kapat
              </Button>
              <Button colorScheme="blue" isLoading={loading} onClick={() => handleUpdate()}>
                Kaydet
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Text textAlign="center" textColor="#003848" mt={4} fontSize="32px" justifyContent="center">
          {user.fullName}
          {isSameUser ? (
            <EditIcon cursor="pointer" color="#01BAEF" boxSize={6} ml={2} mb={2} onClick={onOpen} />
          ) : (
            <></>
          )}
        </Text>
        <Text
          textAlign="center"
          textColor="#015D78"
          display={user.jobTitle === "" ? "none" : "flex"}
          fontSize="18px"
        >
          {user.jobTitle}
        </Text>
        <Text
          textAlign="center"
          textColor="#015D78"
          display={user.city === "" ? "none" : "flex"}
          fontSize="18px"
        >
          {user.city !== "" ? `${user.city} / ${user.country}` : ""}
        </Text>
        <Text
          textColor="#015D78"
          fontSize="24px"
          mt={user.city === "" ? 0 : 8}
          mx={24}
          noOfLines={4}
          textAlign="center"
        >
          {user.bio}
        </Text>
      </Flex>
      <Flex align="flex-end" justify="flex-end" h="100%" mr="8px">
        <Text textColor="#91AEB7">
          <CalendarIcon mr="6px" mb={1} />
          {new Date(user.joinedAt.seconds * 1000).toLocaleDateString("tr-TR")} tarihinde katıldı.
        </Text>
      </Flex>
    </Flex>
  )
}

export default Profile
