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

export default function FormUser({ identifiant }) {
  const formbox = useBreakpointValue({ "2xl": "70vh", "3xl": "50vh" });
  const padding = useBreakpointValue({ "2xl": "2vh", "3xl": "5vh" });
  const input = useBreakpointValue({ "2xl": "47vh", "3xl": "40vh" });
  const router = useRouter()
  const [itemData, setItemData] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    
  });

  useEffect(() => {
    const fetchForEditing = async () => {
      try {
        const response = await fetch("/api/getalluser");
        if (response.ok) {
          const { users } = await response.json();
          const specificuser = users.find(
            (user) => user.user_id === identifiant
          );
          if (specificuser) {
            setItemData(specificuser);
            setFormData({
              username: specificuser.username || "",
              email: specificuser.email || "",
              role: specificuser.role,
              
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
      const response = await fetch("/api/updateuser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: identifiant,
          username: formData.username,
          email: formData.email,
          role: formData.role,
           
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
          w={"50%"}
        >
          <Center mb={8} mt={8}>
            <Heading color={"white"} fontFamily={"marianne"} px={4}>
              Modification des informations identifiant {identifiant}
            </Heading>
          </Center>
          <Box p={8}>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <FormControl id="name" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>
                    Pseudonyme
                  </FormLabel>

                  <InputGroup>
                    <Input
                      type={"text"}
                      name="username"
                      placeholder="Saisissez le nom de l&apos;utilisateur"
                      value={formData?.username || ""}
                      mb={2}
                      w={input}
                      bg={"#B2B1B1"}
                      required={true}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="path" fontFamily={"marianne"}>
                  <FormLabel color={"white"}>Adresse email :</FormLabel>

                  <InputGroup>
                    <Input
                      type={"text"}
                      name="email"
                      placeholder="Saisissez une adresse email"
                      value={formData?.email || ""}
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
                    value={formData?.role || ""}
                    bg={"#B2B1B1"}
                    w={"50%"}
                    onChange={handleChange}
                  >
                    <option defaultValue={""}>Saisissez une permission</option>
                    <option value="admin">Admin</option>
                    <option value="dev">Dev</option>
                  </Select>
                </FormControl>
                
              </HStack>
              
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
