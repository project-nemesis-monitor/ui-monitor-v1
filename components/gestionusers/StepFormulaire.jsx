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
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function StepFormulaire({
  state,
  userconnected,
  onCreateAccountSuccess,
}) {
  const formbox = useBreakpointValue({ "2xl": "70vh", "3xl": "50vh" });
  const padding = useBreakpointValue({ "2xl": "2vh", "3xl": "5vh" });
  const input = useBreakpointValue({ "2xl": "47vh", "3xl": "40vh" });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [permlist, setpermlist] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmpassword") {
      setconfirmPass(value);
    } else if (name === "selectoption") {
      setpermlist(value);
    }
  };
  const isSuper = Cookies.get("sessionRole");
  const [accountCreationStatus, setAccountCreationStatus] = useState(null);
  const handlecreate = async () => {
    try {
      if (confirmPass === password) {
        const response = await fetch("/api/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            permlist,
            password,
          }),
        });

        if (response.ok) {
          setAccountCreationStatus("success");
          onCreateAccountSuccess();
        } else {
          setAccountCreationStatus("failure");
          onCreateAccountSuccess();
        }
      }
    } catch (error) {
      console.error("Erreur lors de la création :", error);
    }
  };

  return (
    <>
      {state == 0 && (
        <Box mt={8}>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Identifiant</FormLabel>
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
                    placeholder="Saisissez un identifiant"
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
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Adresse email</FormLabel>

                <InputGroup>
                  <Input
                    type={"text"}
                    name="email"
                    placeholder="Saisissez une adresse email"
                    value={email}
                    onChange={handleChange}
                    mb={2}
                    w={input}
                    bg={"#B2B1B1"}
                    required={true}
                  />
                </InputGroup>
              </Box>
            </Center>
          </FormControl>
        </Box>
      )}
      {state == 1 && (
        <Box mt={8}>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Permissions à donner :</FormLabel>
                <Select name="selectoption" onChange={handleChange}>
                  <option defaultValue={""}>Saisissez une permission</option>
                  <option value="admin">Admin</option>
                  <option value="dev">Dev</option>
                  {isSuper == "super admin" ? (
                    <option value="super admin">Super Admin</option>
                  ) : (
                    ""
                  )}
                </Select>
              </Box>
            </Center>
          </FormControl>
        </Box>
      )}
      {state == 2 && (
        <Box mt={8}>
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Mot de passe</FormLabel>

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
          <FormControl mx={2} my={4} fontFamily={"marianne"}>
            <Center>
              <Box>
                <FormLabel color={"black"}>Confirmer mot de passe</FormLabel>

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
                    name="confirmpassword"
                    placeholder="Confimer votre mot de passe"
                    value={confirmPass}
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
              onClick={handlecreate}
              bg={"#041538"}
              color={"white"}
              px={"5vh"}
              _hover={{ bg: "gray.300", color: "#2645F9" }}
              fontFamily={"marianne"}
            >
              Créer le compte
            </Button>
          </Center>
        </Box>
      )}
      {state == 3 && accountCreationStatus == "success" && (
        <>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            mt={8}
            fontFamily={"marianne"}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Le compte a été créé avec succès !
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Dîtes bienvenue au nouveau membre !
            </AlertDescription>
          </Alert>
        </>
      )}
      {state == 3 && accountCreationStatus == "failure" && (
        <>
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            mt={8}
            fontFamily={"marianne"}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Un problème est survenu lors de la création du compte !
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Une erreur est survenue !
            </AlertDescription>
          </Alert>
        </>
      )}
    </>
  );
}
