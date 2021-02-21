import Container from "../components/Container"
import React from "react"
import Team from "../components/Team/Team"
import Member from "../components/Team/Member"
import { Flex, Heading } from "@chakra-ui/react"

const team: React.FC = () => {
  return (
    <Container bgSrc="/wave1.svg">
      <Team
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
        h="493px"
        bgColor="#E6F8FD"
        borderRadius="8px"
        direction="column"
      >
        <Heading textColor="#003848" m={6}>
          Members
        </Heading>
        <Member
          memberName="Kerem Esen"
          memberBio="yazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc"
        />
        <Member memberName="Kerem Esen" memberBio="yazilim ögren" />
        <Member
          memberName="Kerem Esen"
          memberBio="yazilim ögrenip her gün 5l su içen sabah 6 da kalkıp web askiyla yanıp tutusan bir genc nt nt nt nt "
        />
      </Flex>
    </Container>
  )
}

export default team
