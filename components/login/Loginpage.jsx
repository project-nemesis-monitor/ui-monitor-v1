import { useState } from "react";
import { useRouter } from "next/router";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import Cookies from "js-cookie";
import {
  Box,
  Image,
  Input,
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Text,
  InputRightElement,
  IconButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function LoginPage() {
  const formbox = useBreakpointValue({ "2xl": "70vh", "3xl": "50vh" });
  const padding = useBreakpointValue({ "2xl": "2vh", "3xl": "5vh" });
  const input = useBreakpointValue({ "2xl": "47vh", "3xl": "40vh" });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/checkusr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log("data");
        console.log(data);
        console.log("data");
        const { token } = data.usr;

        Cookies.set("sessionToken", token, {
          secure: true,
          sameSite: "strict",
          httpOnly: true,
        });

        router.push("/");
      } else {
        console.error("Échec de l'authentification");
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification :", error);
    }
  };

  return (
    <Box pt={24} fontFamily={"marianne"}>
      <Center>
        <Image src="/logo1.png" w={"30vh"} alt="Your Image" />
      </Center>
      <Center>
        <Box bg="#2645F9" borderRadius="md" w={formbox} py={padding}>
          <chakra.h3
            fontSize="4xl"
            fontWeight="bold"
            mb={2}
            textAlign="center"
            color={"white"}
          >
            Connexion{" "}
            <Image src="/emojihand.png" alt="emoji" display="inline-block" />
          </chakra.h3>
          <Text color={"white"} textAlign={"center"} mx={10} mb={10}>
            Déverrouillez les portes du possible : Connectez-vous à une
            expérience numérique inégalée
          </Text>
          <FormControl mx={4} my={4}>
            <Center>
              <Box>
                <FormLabel color={"white"}>Identifiant</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image
                      src={"/icons/user.svg"}
                      alt="User Icon"
                      boxSize={7}
                      pt={0}
                    />
                  </InputLeftElement>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Saisissez votre identifiant"
                    value={username}
                    onChange={handleChange}
                    mb={2}
                    w={input}
                    bg={"#B2B1B1"}
                  />
                </InputGroup>
              </Box>
            </Center>
          </FormControl>
          <FormControl mx={4} my={4}>
            <Center>
              <Box>
                <FormLabel color={"white"}>Mot de passe</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Image
                      src={"/icons/lock.svg"}
                      alt="Lock Icon"
                      boxSize={7}
                      pt={0}
                    />
                  </InputLeftElement>
                  <Input
                    type={isOpen ? "text" : "password"}
                    name="password"
                    placeholder="Saisissez votre mot de passe"
                    value={password}
                    onChange={handleChange}
                    mb={2}
                    w={input}
                    bg={"#B2B1B1"}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={
                        isOpen
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                      icon={isOpen ? <UnlockIcon /> : <LockIcon />}
                      variant="ghost"
                      color={"#2645F9"}
                      _hover={{}}
                      ml={0}
                      onClick={onToggle}
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Center>
          </FormControl>

          <Center>
            <Button
              onClick={handleLogin}
              bg={"#041538"}
              color={"white"}
              px={"5vh"}
              _hover={{ bg: "white", color: "#2645F9" }}
            >
              Je me connecte
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}
