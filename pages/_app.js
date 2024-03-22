import PublicLayout from "@/components/layouts/PublicLayouts";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </ChakraProvider>
  )
}
