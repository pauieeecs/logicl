import { Box, Flex, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react"
import SwitchButton from "../components/SwitchButton"
import Container from "../components/Container"
import Content from "../components/Shuffle/Content"
import Comments from "../components/Shuffle/CommentsContainer"
import Link from "next/link"
import VoteButton from "../components/VoteButton"
import ModalContainer from "../components/Shuffle/ModalContainer"

const Shuffle: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container bgSrc="/wave1.svg">
      <SwitchButton page="Shuffle" />
      <Flex
        my={10}
        direction="column"
        p="20px 30px"
        w="1000px"
        h="700px"
        bgColor="#E6F8FD"
        borderRadius={15}
        position="relative"
      >
        <Flex position="relative" direction="column">
          <Content
            title="Trendyol’da işe girmek istiyorum agalar"
            text="Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a 
          galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries,
           but also the leap into electronic typesetting, remaining 
           essentially unchanged. It was popularised in the 1960s 
           with the release of Letraset sheets containing Lorem 
           Ipsum passages, and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           and more recently with desktop publishing 
           software like Aldus PageMaker including versions of 
           Lorem Ipsum.including version.."
          />
          <Text
            position="absolute"
            right="5"
            bottom="-6"
            color="#015D78"
            fontWeight="bold"
            fontSize="sm"
            cursor="pointer"
            opacity="0.7"
            onClick={onOpen}
          >
            click to read more
          </Text>
        </Flex>

        <Box my={7} w="100%" h="2px" bgColor="#003848" />
        <Heading letterSpacing="1px" size="md" color="#015D78">
          Öne Çıkan Yorumlar
        </Heading>
        <Comments />

        <VoteButton top="-24px" right="50px" down={55} up={55} />
        <Link href="#">
          <Icon
            position="absolute"
            top="-24px"
            right="-10px"
            width="50px"
            height="40px"
            viewBox="0 0 52 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
          >
            <path
              d="M31.7778 11.4667V0L52 20.0667L31.7778 40.1333V28.38C17.3333 28.38 7.22222 32.9667 0 43C2.88889 28.6667 11.5556 14.3333 31.7778 11.4667Z"
              fill="#015D78"
            />
          </Icon>
        </Link>

        <ModalContainer
          isOpen={isOpen}
          onClose={onClose}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.including version..Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.including version..Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.including version..Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has text of the
            printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.including version..Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has"
        />
      </Flex>
    </Container>
  )
}

export default Shuffle
