import React from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex
      bg="#2645F9"
      py={4}
      color="white"
      mt={24}
      align="center"
      justify="center"
      direction="column"
      fontFamily={"marianne"}
    >
      
      <Text textAlign="center" mt={2} fontSize={"medium"}>
        NEMESIS GROUP
      </Text>
    </Flex>
  );
};

export default Footer;