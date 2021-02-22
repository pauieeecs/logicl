import { Heading, Stack } from "@chakra-ui/react"
import Container from "../components/Container"
import Team from "../components/Team-Searching/Team"

const teamsearching: React.FC = () => {
  return (
    <Container bgSrc="/wave3.svg">
      <Heading mt={10} w="780px" size="2xl" textAlign="center" fontWeight="bold" color="#065E77">
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
          teamAppliers={10}
          teamAppImg1="/user.jpg"
          teamAppImg2="/user.jpg"
          teamAppImg3="/user.jpg"
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
          teamAppliers={10}
          teamAppImg1="/user.jpg"
          teamAppImg2="/user.jpg"
          teamAppImg3="/user.jpg"
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
          teamAppliers={10}
          teamAppImg1="/user.jpg"
          teamAppImg2="/user.jpg"
          teamAppImg3="/user.jpg"
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
          teamAppliers={10}
          teamAppImg1="/user.jpg"
          teamAppImg2="/user.jpg"
          teamAppImg3="/user.jpg"
        />
      </Stack>
    </Container>
  )
}

export default teamsearching
