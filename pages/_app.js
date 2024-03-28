import PublicLayout from "@/components/layouts/PublicLayouts";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/scrollbar.css'
import theme from "@/utils/chakra-theme";


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </ChakraProvider>
  )
}
