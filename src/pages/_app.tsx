import { AppProps } from "next/app"
import { ChakraProvider, CSSReset, Flex } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      <CSSReset />
      <Flex width="100%" height="100%" minH="100vh" flexDirection="column">
        <Navbar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
