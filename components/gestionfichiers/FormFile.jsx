import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Button,
  Center,
  Input,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  InputGroup,
  useBreakpointValue,
  Select,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function FormFile({ identifiant }) {
  const formbox = useBreakpointValue({ "2xl": "70vh", "3xl": "50vh" });
  const padding = useBreakpointValue({ "2xl": "2vh", "3xl": "5vh" });
  const input = useBreakpointValue({ "2xl": "47vh", "3xl": "40vh" });
  const router = useRouter()
  const [itemData, setItemData] = useState(null);
  const [formData, setFormData] = useState({
    filename: "",
    path: "",
    check_mod: "",
    permissions: "",
    userPermissions: "0",
    groupPermissions: "0",
    otherPermissions: "0",
    extendedPermissions: "0",
  });

  useEffect(() => {
    const fetchForEditing = async () => {
      try {
        const response = await fetch("/api/getallfiles");
        if (response.ok) {
          const { files } = await response.json();
          const specificfile = files.find(
            (file) => file.file_id === identifiant
          );
          if (specificfile) {
            setItemData(specificfile);
            setFormData({
              filename: specificfile.filename || "",
              path: specificfile.path || "",
              check_mod: specificfile.check_mod.toString(),
              permissions: specificfile.permissions.toString(),
              userPermissions: specificfile.permissions[1] || "0",
              groupPermissions: specificfile.permissions[2] || "0",
              otherPermissions: specificfile.permissions[3] || "0",
              extendedPermissions: specificfile.permissions[0] || "0",
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (identifiant) {
      fetchForEditing();
    }
  }, [identifiant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleUpdate = async () => {
    try {
      const response = await fetch("/api/updatefile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileId: identifiant,
          filename: formData.filename,
          path: formData.path,
          check_mod: formData.check_mod,
          permissions: [
            formData.extendedPermissions,
            formData.userPermissions,
            formData.groupPermissions,
            formData.otherPermissions,
          ].join(''), 
        }),
      });
      if (response.ok) {
        router.push("/dashboard")
      } else {
        console.error("Erreur lors de la mise à jour");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };
  return (
    <>
      {" "}
      <Box p={10}>
        <NextLink href={"/dashboard"}>
          <Button
            bg={"#2645F9"}
            fontFamily={"marianne"}
            color={"white"}
            _hover={{ bg: "gray.300", color: "#2645F9" }}
          >
            Retour dahsboard
          </Button>
        </NextLink>
      </Box>
      <Center>
        <Box
          bg={"#2645F9"}
          fontFamily={"marianne"}
          m={10}
          borderRadius={"10px"}
          w={"70%"}
        >
          <Center mb={8} mt={8}>
            <Heading color={"white"} fontFamily={"marianne"}>
              Modification des informations n°{identifiant}
            </Heading>
          </Center>
          <Box p={8}>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <FormControl id="name" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>
                    fichier+extension/dossier :
                  </FormLabel>

                  <InputGroup>
                    <Input
                      type={"text"}
                      name="name"
                      placeholder="Saisissez le nom du fichier et son extension"
                      value={formData?.filename || ""}
                      mb={2}
                      w={input}
                      bg={"#B2B1B1"}
                      required={true}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="path" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>Chemin absolue :</FormLabel>

                  <InputGroup>
                    <Input
                      type={"text"}
                      name="path"
                      placeholder="Saisissez le chemin absolue"
                      value={formData?.path || ""}
                      mb={2}
                      w={input}
                      bg={"#B2B1B1"}
                      required={true}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
              </HStack>
              <HStack spacing={2}>
                <FormControl id="userPermissions" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>
                    Permissions utilisateur :
                  </FormLabel>
                  <Select
                    name="userPermissions"
                    value={formData?.userPermissions || "0"}
                    bg={"#B2B1B1"}
                    w={"50%"}
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
                <FormControl id="groupPermissions" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>Permissions groupe :</FormLabel>
                  <Select
                    name="groupPermissions"
                    value={formData?.groupPermissions || "0"}
                    bg={"#B2B1B1"}
                    w={"50%"}
                    onChange={handleChange}
                  >
                    <option value="4">Lecture</option>
                    <option value="2">Écriture</option>
                    <option value="1">Exécution</option>
                    <option value="6">Lecture, Ecriture</option>
                    <option value="3">Ecriture, Exécution</option>
                    <option value="5">Lecture, Execution</option>
                    <option value="7">Lecture, Ecriture, Execution</option>
                    <option value={"0"}>Rien</option>
                  </Select>
                </FormControl>
              </HStack>
              <HStack spacing={2}>
                <FormControl id="otherPermissions" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>Permissions autres :</FormLabel>
                  <Select
                    name="otherPermissions"
                    value={formData?.otherPermissions || "0"}
                    bg={"#B2B1B1"}
                    w={"50%"}
                    onChange={handleChange}
                  >
                    <option value="4">Lecture</option>
                    <option value="2">Écriture</option>
                    <option value="1">Exécution</option>
                    <option value="6">Lecture, Ecriture</option>
                    <option value="3">Ecriture, Exécution</option>
                    <option value="5">Lecture, Execution</option>
                    <option value="7">Lecture, Ecriture, Execution</option>
                    <option value={"0"}>Rien</option>
                  </Select>
                </FormControl>
                <FormControl id="extendedPermissions" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>Permissions étendues :</FormLabel>
                  <Select
                    name="extendedPermissions"
                    value={formData?.extendedPermissions || "0"}
                    bg={"#B2B1B1"}
                    w={"50%"}
                    onChange={handleChange}
                  >
                    <option value="4">en utilisateur</option>
                    <option value="2">en groupe</option>
                    <option value="1">en autre</option>
                    <option value={"0"}> en rien</option>
                  </Select>
                </FormControl>
              </HStack>
              <FormControl id="check_mod" fontFamily={"marianne"}>
                <FormLabel color="white">à surveiller :</FormLabel>
                <Select
                  name="check_mod"
                  value={formData?.check_mod || ""}
                  bg={"#B2B1B1"}
                  w={"25%"}
                  onChange={handleChange}
                >
                  <option value="true">On</option>
                  <option value="false">Off</option>
                </Select>
              </FormControl>
              <Button
                onClick={handleUpdate}
                bg={"#041538"}
                color={"white"}
                px={"5vh"}
                _hover={{ bg: "gray.300", color: "#2645F9" }}
                fontFamily={"marianne"}
              >
                Modifier les informations
              </Button>
            </VStack>
          </Box>
        </Box>
      </Center>
    </>
  );
}
