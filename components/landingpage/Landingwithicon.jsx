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
} from "@chakra-ui/react";
import Buttongradient from "./Buttongradient";

export default function Landingwithicon({ iconpath }) {
  return (
    <Box
      pt={16}
      fontFamily={"marianne"}
      color={"white"}
      bgSize={"200% 100%"}
      bgPos={"25%"}
      zIndex={0}
    >
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
        mx={24}
      >
        <GridItem>
          <HStack spacing={4}>
            <Tag size={"md"} borderRadius="full" variant="solid" bg={"white"}>
              <TagLabel>
                <Text
                  bgGradient="linear(to-l, #366DD3, #36C0FA)"
                  bgClip="text"
                  fontWeight="extrabold"
                  fontFamily={"marianne"}
                >
                  Monitoring
                </Text>
              </TagLabel>
            </Tag>
          </HStack>
          <Heading as="h2" size="3xl" mt={4} fontWeight={"extrabold"} fontFamily={"marianne"}>
            Nemesis : Surveillez et Gérez vos Fichiers avec Pouvoir
          </Heading>
          <Text mt={2} fontSize={"x-large"} >Surveillez et gérez vos fichiers Linux en toute simplicité. Avec une interface conviviale et des fonctionnalités avancées, Nemesis vous offre le contrôle total sur votre système. Sécurisez vos données et optimisez votre environnement Linux dès maintenant</Text>
        </GridItem>
        <GridItem justifyContent={"center"} ml={20}>
          <Image src={iconpath} w={"100%"} h={"100%"} alt="logo" boxSize={"75%"}/>
        </GridItem>
      </Grid>
      <Buttongradient/>
    </Box>
  );
}
