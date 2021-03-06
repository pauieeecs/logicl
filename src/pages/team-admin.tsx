import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import Container from "../components/Container"
import Appliers from "../components/Team/Appliers"
import MemberAdmin from "../components/Team/MemberAdmin"
import TeamAdmin from "../components/Team/TeamAdmin"

const teamAdmin: React.FC = () => {
  return (
    <Container bgSrc="wave1.svg">
      <TeamAdmin
        teamName="Mesir 45"
        teamDescription="uzun bir takım açıklaması amaçlar hedefler gelecek planları motive edici gaza getiren
            cümleler fanfinfon falan filan feşman lorem impus hayatın anlamı yunus emre mevlana aşık
            veysel uzun bir takım açıklaması amaçlar hedefler gelecek planları motive edici gaza
            getiren cümleler fanfinfon falan filan feşman lorem impus hayatın anlamı yunus emre
            mevlana aşık veysel uzun bir takım açıklaması amaçlar hedefler gelecek planları motive
            edici gaza getiren cümleler fanfinfon falan filan feşman lorem impus hayatın anlamı
            yunus emre mevlana aşık veysel"
        teamCreatedAt="04.17 19.02.2021"
      />
      <Flex
        boxShadow="md"
        w="976px"
        h="100%"
        bgColor="#E6F8FD"
        borderRadius="8px"
        direction="column"
      >
        <Flex flexDirection="row" padding={6} justifyContent="space-between">
          <Heading textColor="#003848" display="inline-block">
            Members
          </Heading>
          <Button
            bgColor="#01BAEF"
            w="120px"
            h="35px"
            borderRadius="47px"
            textColor="#fff"
            _hover={{ bgColor: "#1998FF" }}
          >
            Add Member +
          </Button>
        </Flex>
        <Flex direction="column" w="100%">
          <MemberAdmin
            memberName="Kerem Esen"
            memberBio="yazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc"
          />
          <MemberAdmin memberName="Kerem Esen" memberBio="yazilim ögren" />
          <MemberAdmin
            memberName="Kerem Esen"
            memberBio="yazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt nt"
          />
        </Flex>
        <Box w="95%" alignSelf="center" h="1px" my={6} bgColor="black" />
        <Heading textColor="#003848" mx={6} mb={6}>
          Appliers
        </Heading>
        <Flex flexDirection="column">
          <Appliers
            appliersName="Kerem Esen"
            appliersDesc="yazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc nt nt nt nt"
          />
          <Appliers
            appliersName="Kerem Esen"
            appliersDesc="yazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc nt nt nt ntyazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc nt nt nt ntyazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc nt nt nt nt"
          />
        </Flex>
      </Flex>
    </Container>
  )
}

export default teamAdmin
