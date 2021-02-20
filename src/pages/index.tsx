import Head from "next/head"
import List from "./explore"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Logicl with NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List />
    </div>
  )
}

export default Home
