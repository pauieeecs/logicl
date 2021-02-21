import Head from "next/head"
import Explore from "./explore"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Logicl with NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Explore />
    </div>
  )
}

export default Home
