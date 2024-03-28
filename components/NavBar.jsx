import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Collapse,
  useDisclosure,
  Image,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
 

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isScrolled = currentScrollY > 50;
    setIsScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg={isScrolled ? "#2645F9" : "#041538"}
      boxShadow={isScrolled ? "md" : "none"}
      py={4}
      px={8}
      position="fixed"
      top={isScrolled ? 0 : 0}
      left={0}
      right={0}
      zIndex={isScrolled ? "sticky" : "initial"}
      transition="top 0.3s ease-in-out"
      fontFamily={"marianne"}
    >
      <Flex align="center">
        <Box fontWeight="bold" fontSize="lg">
          <NextLink href={"/"}>
            <Image boxSize="70px" src="/logo1.png" alt="logo" />
          </NextLink>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Flex color="white">
            <Box mx={4}>
              <NextLink href={"/auth/loginapp"}>
                <Button
                  bg="#2645F9"
                  size="lg"
                  color={"white"}
                  _hover={{ color: "#2645F9", bg: "white" }}
                >
                  Connexion
                </Button>
              </NextLink>
            </Box>
          </Flex>
        </Box>
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="#2645F9"
          color={"#2645F9"}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} bg={"white"}>
          <Flex direction="column" color="white">
            <Box mx={4} my={2}>
            <NextLink href={"/auth/loginapp"}>
                <Button
                  bg="#2645F9"
                  size="lg"
                  color={"white"}
                  _hover={{ color: "#2645F9", bg: "white" }}
                >
                  Connexion
                </Button>
              </NextLink>
            </Box>
            
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
