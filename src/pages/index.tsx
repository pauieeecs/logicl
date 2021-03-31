import Head from "next/head"
import Explore from "./explore"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Keşfet | Logicl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Explore />
    </div>
  )
}

export default Home
