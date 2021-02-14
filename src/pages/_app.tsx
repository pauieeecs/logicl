import { AppProps } from "next/app"
import { ChakraProvider, CSSReset, Flex } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      <CSSReset />
      <Flex width="100%" height="100%" minH="100vh" flexDirection="column">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
