import PublicLayout from "@/components/layouts/PublicLayouts";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/scrollbar.css'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </ChakraProvider>
  )
}
