import { Box, ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";
// import { ReactNode } from "react";
import theme from "@/utils/chakra-theme";
import { useRouter } from "next/router";


export default function PublicLayout({ children }) {

  const router = useRouter()
  return (
    <Box minH={"100vh"} bg={"#042c44"}>
      <Head>
        <title>Nemesis</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/logo1.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <main>{children}</main>
      </ChakraProvider>
    </Box>
  );
}