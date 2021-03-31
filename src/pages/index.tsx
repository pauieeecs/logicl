import Head from "next/head"
import Container from "../components/Container"
import List from "../components/List-Page-Components/list"

const Home: React.FC = () => {
  return (
    <Container bgSrc="/wave1.svg">
      <Head>
        <title>Keşfet | Logicl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List />
    </Container>
  )
}

export default Home
