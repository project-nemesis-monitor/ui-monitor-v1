import {
  Box,
  Tag,
  HStack,
  Image,
  Grid,
  GridItem,
  TagLabel,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Buttongradient() {
  const downloadManual = () => {
    
    const link = document.createElement('a');
    link.href = '/Manuel_nemesis.pdf'; 
    link.download = 'Manuel_nemesis.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box
      fontFamily={"marianne"}
      color={"white"}
      bgGradient={"linear(to-b, #041538, #2645F9)"}
      bgSize={"200% 100%"}
      bgPos={"25%"}
      zIndex={0}
      pb={24}
    >
      <HStack mx={24} spacing={4}>
        <NextLink href={"/auth/loginapp"}>
          <Button
            bgGradient="linear(to-l, #366DD3, #36C0FA)"
            size="lg"
            color={"white"}
            _hover={{ color: "#2645F9", bg: "white" }}
          >
            Connexion
          </Button>
        </NextLink>

        <Button
          bgGradient="linear(to-l, #366DD3, #36C0FA)"
          size="lg"
          color={"white"}
          _hover={{ color: "#2645F9", bg: "white" }}
          onClick={downloadManual}
        >
          Télécharger le manuel d&apos;utilisation {"  "} <Image src="/Download.png" alt="dnl image"/>
        </Button>
      </HStack>
    </Box>
  );
}
