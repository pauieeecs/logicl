import { Heading, Stack } from "@chakra-ui/react"
import Container from "../components/Container"
import Team from "../components/Team-Searching/Team"

const TeamSearching: React.FC = () => {
  return (
    <Container bgSrc="/wave3.svg">
      <Heading mt={10} w="720px" textAlign="center" fontWeight="bold" color="#065E77">
        KENDİNE EN UYGUN EKİBİ BUL VE ÇALIŞMAYA BAŞLA
      </Heading>
      <Stack spacing={5} my="100px">
        <Team
          teamName="Pide Vakfı"
          teamCategory="Startup - Veri Analizi"
          teamText="Data analysis is a process of inspecting, cleansing, 
          transforming, and modeling data with the goal of discovering useful
           information, informing conclusions, and supporting decision-making. 
           Data analysis has multiple facets and approaches, encompassing diverse 
           techniques under a variety of names, and is used in different business, 
           science, and social science domains. In today's business world, data analysis plays a role in making 
           decisions more scientific and helping businesses operate more effectively."
          name="Emre Mert Akdağ"
          avatar="user.jpg"
        />
        <Team
          teamName="Pide Vakfı"
          teamCategory="Startup - Veri Analizi"
          teamText="Data analysis is a process of inspecting, cleansing, 
          transforming, and modeling data with the goal of discovering useful
      "
          name="Emre Mert Akdağ"
          avatar="user.jpg"
        />
        <Team
          teamName="Pide Vakfı"
          teamCategory="Startup - Veri Analizi"
          teamText="Data analysis is a process of inspecting, cleansing, 
          transforming, and modeling data with the goal of discovering useful
           information, informing conclusions, and supporting decision-making. 
           Data analysis has multiple facets and approaches, encompassing diverse 
           techniques under a variety of names, and is used in different business, 
           science, and social science domains. In today's business world, data analysis plays a role in making 
           decisions more scientific and helping businesses operate more effectively."
          name="Emre Mert Akdağ"
          avatar="user.jpg"
        />
        <Team
          teamName="Pide Vakfı"
          teamCategory="Startup - Veri Analizi"
          teamText="Data analysis is a process of inspecting, cleansing, 
          transforming, and modeling data with the goal of discovering useful
           information, informing conclusions, and supporting decision-making. 
           Data analysis has multiple facets and approaches, encompassing diverse 
           techniques under a variety of names, and is used in different business, 
           science, and social science domains. In today's business world, data analysis plays a role in making 
           decisions more scientific and helping businesses operate more effectively."
          name="Emre Mert Akdağ"
          avatar="user.jpg"
        />
      </Stack>
    </Container>
  )
}

export default TeamSearching
