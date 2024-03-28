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
  return (
    <Box
      fontFamily={"marianne"}
      color={"white"}
      bgGradient={"linear(to-b, #041538, #2645F9)"}
      bgSize={"200% 100%"}
      bgPos={"25%"}
      zIndex={0}
      pb={20}
    >
      <HStack mx={20} spacing={4}>
        <NextLink href={"/auth/loginapp"}>
          <Button
            bgGradient="linear(to-l, #366DD3, #36C0FA)"
            size="lg"
            color={"white"}
            _hover={{ color: "#2645F9", bg: "white" }}
          >
            CONNEXION
          </Button>
        </NextLink>

        <Button
          bgGradient="linear(to-l, #366DD3, #36C0FA)"
          size="lg"
          color={"white"}
          _hover={{ color: "#2645F9", bg: "white" }}
        >
          Télécharger le manuel d'utilisation {"  "} <Image src="/Download.png" />
        </Button>
      </HStack>
    </Box>
  );
}
