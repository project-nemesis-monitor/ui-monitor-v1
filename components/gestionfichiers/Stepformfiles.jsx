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
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function Stepformfiles({ state, onCreateAccountSuccess }) {
  const formbox = useBreakpointValue({ "2xl": "70vh", "3xl": "50vh" });
  const padding = useBreakpointValue({ "2xl": "2vh", "3xl": "5vh" });
  const input = useBreakpointValue({ "2xl": "47vh", "3xl": "40vh" });
  const [fileName, setfileName] = useState("");
  const [absolutePath, setabsolutePath] = useState("");
  const [userperm, setuserperm] = useState("");
  const [groupperm, setgroupperm] = useState("");
  const [otherperm, setotherperm] = useState("");
  const [extendperm, setextendperm] = useState("");
  const [checkMod, setcheckMod] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setfileName(value);
    } else if (name === "absolutepath") {
      setabsolutePath(value);
    } else if (name === "userPermissions") {
      setuserperm(value);
    } else if (name === "groupPermissions") {
      setgroupperm(value);
    } else if (name === "otherPermissions") {
      setotherperm(value);
    } else if (name === "extendPermissions") {
      setextendperm(value);
    } else if (name === "check_mod") {
      setcheckMod(value);
    }
  };
  const isSuper = Cookies.get("sessionRole");
  const tokenuser = Cookies.get("sessionToken")
  const [accountCreationStatus, setAccountCreationStatus] = useState(null);
  const handlecreate = async () => {
    try {
      const response = await fetch('/api/createfile', {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: fileName,
          checkMod: checkMod,
          path: absolutePath,
          permissions: [
            extendperm,
            userperm,
            groupperm,
            otherperm
          ].join(''),
          userToken: tokenuser

        })
      })

        if (response.ok) {
          setAccountCreationStatus("success");
          onCreateAccountSuccess();
        } else {
          setAccountCreationStatus("failure");
          onCreateAccountSuccess();
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
                <FormLabel color={"black"}>
                  nom du dossier ou fichier (avec extension)
                </FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Saisissez le nom"
                    value={fileName}
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
                <FormLabel color={"black"}>Chemin absolue :</FormLabel>

                <InputGroup>
                  <Input
                    type={"text"}
                    name="absolutepath"
                    placeholder="Saisissez le chemin absolue"
                    value={absolutePath}
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
          <Center>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <FormControl mx={2} my={4} fontFamily={"marianne"}>
                  <FormLabel color={"black"}>
                    Permissions utilisateur :
                  </FormLabel>

                  <Select
                    name="userPermissions"
                    value={userperm}
                    bg={"#B2B1B1"}
                    w={"60%"}
                    onChange={handleChange}
                  >
                    <option value="4">Lecture</option>
                    <option value="2">Écriture</option>
                    <option value="1">Exécution</option>
                    <option value="6">Lecture, Ecriture</option>
                    <option value="3">Ecriture, Exécution</option>
                    <option value="5">Lecture, Execution</option>
                    <option value="7">Lecture, Ecriture, Execution</option>
                    <option value="0">Rien</option>
                  </Select>
                </FormControl>
                <FormControl mx={2} my={4} fontFamily={"marianne"}>
                  <FormLabel color={"black"}>Permissions groupe :</FormLabel>

                  <Select
                    name="groupPermissions"
                    value={groupperm}
                    bg={"#B2B1B1"}
                    w={"60%"}
                    onChange={handleChange}
                  >
                    <option value="4">Lecture</option>
                    <option value="2">Écriture</option>
                    <option value="1">Exécution</option>
                    <option value="6">Lecture, Ecriture</option>
                    <option value="3">Ecriture, Exécution</option>
                    <option value="5">Lecture, Execution</option>
                    <option value="7">Lecture, Ecriture, Execution</option>
                    <option value="0">Rien</option>
                  </Select>
                </FormControl>
              </HStack>
              <HStack spacing={4}>
                <FormControl mx={2} my={4} fontFamily={"marianne"}>
                  <FormLabel color={"black"}>Permissions autre :</FormLabel>

                  <Select
                    name="otherPermissions"
                    value={otherperm}
                    bg={"#B2B1B1"}
                    w={"60%"}
                    onChange={handleChange}
                  >
                    <option value="4">Lecture</option>
                    <option value="2">Écriture</option>
                    <option value="1">Exécution</option>
                    <option value="6">Lecture, Ecriture</option>
                    <option value="3">Ecriture, Exécution</option>
                    <option value="5">Lecture, Execution</option>
                    <option value="7">Lecture, Ecriture, Execution</option>
                    <option value="0">Rien</option>
                  </Select>
                </FormControl>
                <FormControl mx={2} my={4} fontFamily={"marianne"}>
                  <FormLabel color={"black"}>Permissions étendue :</FormLabel>

                  <Select
                    name="extendPermissions"
                    value={extendperm}
                    bg={"#B2B1B1"}
                    w={"60%"}
                    onChange={handleChange}
                  >
                    <option value="4">en utilisateur</option>
                    <option value="2">en groupe</option>
                    <option value="1">en autre</option>
                    <option value={"0"}> en rien</option>
                  </Select>
                </FormControl>
              </HStack>
            </VStack>
          </Center>
        </Box>
      )}
      {state == 2 && (
        <Box mt={8} mb={4}>
          
            <FormControl id="check_mod" fontFamily={"marianne"}mb={8}>
              <Center>
                <FormLabel color="black">à surveiller :</FormLabel>
                <Select
                  name="check_mod"
                  value={checkMod}
                  bg={"#B2B1B1"}
                  w={"20%"}
                  onChange={handleChange}
                >
                  <option value="true">On</option>
                  <option value="false">Off</option>
                </Select>
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
              Ajouter le fichier/dossier
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
              Le fichier/dossier a été ajouté avec succès !
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Encore plus de sécurité !
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
              Un problème est survenu lors de l&apos;ajout du fichier/dossier !
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
