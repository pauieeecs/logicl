import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
