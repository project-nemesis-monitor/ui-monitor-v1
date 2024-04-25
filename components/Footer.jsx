import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="#2645F9"
      py={4}
      color="white"
      align="center"
      justify="center"
      fontFamily={"marianne"}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      width="100%"
    >
      <Text textAlign="center" fontSize={"medium"}>
        
        <Link href="/mentions-legales" mr={4}>Mentions Légales</Link>
        <Link href="/cgu" mr={4}>Conditions générales d&apos;utilisation</Link>
        <Link href="/politique" mr={4}>Politique de confidentialité</Link>
        
      </Text>
    </Flex>
  );
};

export default Footer;
