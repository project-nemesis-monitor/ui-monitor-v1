import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Defaultdashboard() {
  const [userdata, setUserdata] = useState(null);
  const [userCount, setUserCount] = useState(null);
  const [filesCount, setFilesCount] = useState(null);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get("sessionToken");
      if (token) {
        try {
          const response = await fetch("/api/checkusrafterloged", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
            }),
          });
          if (response.ok) {
            const data = await response.json();
            setUserdata(data.usr);
          } else {
            console.error("Erreur de réponse:", response.status);
          }
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
        }
      }
    };

    const fetchUserCount = async () => {
      try {
        const response = await fetch("/api/countmember");
        if (response.ok) {
          const data = await response.json();
          setUserCount(data.count);
        } else {
          console.error("Erreur de réponse:", response.status);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du nombre d'utilisateurs:",
          error
        );
      }
    };
    const fetchfileCount = async () => {
      try {
        const response = await fetch("/api/countfiles");
        if (response.ok) {
          const data = await response.json();
          setFilesCount(data.count);
        } else {
          console.error("Erreur de réponse:", response.status);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du nombre d'utilisateurs:",
          error
        );
      }
    };

    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/gettailfile");
        if (response.ok) {
          const data = await response.json();
          setFiles(data.files);
        } else {
          console.error("Erreur de réponse:", response.status);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des fichiers:", error);
      }
    };

    fetchUserData();
    fetchUserCount();
    fetchfileCount();
    fetchFiles();
  }, []);
  if (!userdata) {
    return <div>Chargement en cours...</div>;
  }
  const { username } = userdata;
  return (
    <>
      <Box justifyContent={"center"} mb={4} fontFamily={"marianne"}>
        <Center>
          <Heading fontFamily={"marianne"}>Tableau de bord</Heading>
        </Center>
      </Box>
      <Flex justify="center" color={"white"} fontFamily={"marianne"}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          width="85% "
          mx="auto"
          pl={4}
          fontFamily={"marianne"}
        >
          <GridItem
            w="90%"
            h="24"
            bg="#2645F9"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          >
            <Heading as={"h4"} size={"md"} fontFamily={"marianne"}>
              Bienvenue {username}
            </Heading>
          </GridItem>
          <GridItem
            w="90%"
            h="24"
            bg="#2645F9"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          >
            <Heading as={"h4"} size={"md"} fontFamily={"marianne"}>
              Nombre utilisateur : {userCount}
            </Heading>
          </GridItem>
          <GridItem
            w="90%"
            h="24"
            bg="#2645F9"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          >
            <Heading as={"h4"} size={"md"} fontFamily={"marianne"}>
              Nombre fichier : {filesCount}
            </Heading>
          </GridItem>
        </Grid>
      </Flex>
      <Center mt={10}>
        <Box
          w={"90%"}
          bg={"#2645F9"}
          mx={4}
          justifyContent={"center"}
          borderRadius="10px"
          h={"49vh"}
        >
            <Heading as={"h4"} size={"md"} fontFamily={"marianne"} p={4}>
              Derniers fichiers uploader :
            </Heading>
          <Table color={"white"}>
            <Thead color={"white"} fontFamily={"marianne"}>
              <Tr>
                <Th color={"white"} fontFamily={"marianne"}>Actif</Th>
                <Th color={"white"}fontFamily={"marianne"}>identifiant</Th>
                <Th color={"white"} fontFamily={"marianne"}>fichier/dossier</Th>
                <Th color={"white"} fontFamily={"marianne"}>chemin</Th>
                <Th color={"white"} fontFamily={"marianne"}>permissions</Th>
                <Th color={"white"} fontFamily={"marianne"}>nom uploader</Th>
                <Th color={"white"} fontFamily={"marianne"}>uploader à</Th>
              </Tr>
            </Thead>
            <Tbody bg={"#2645F9"}>
              {files.map((file) => (
                <Tr key={file.id} bg={"#2645F9"}>
                  <Td>
                    {file.check_mod == 1 ? (
                      <Alert status="success" bg={"#2645F9"}>
                        <AlertIcon />
                      </Alert>
                    ) : (
                      <Alert status="error" bg={"#2645F9"}>
                        <AlertIcon />
                      </Alert>
                    )}
                  </Td>
                  <Td fontFamily={"marianne"}>{file.file_id}</Td>
                  <Td fontFamily={"marianne"}>{file.filename}</Td>
                  <Td fontFamily={"marianne"}>{file.path}</Td>
                  <Td fontFamily={"marianne"}>{file.permissions}</Td>
                  <Td fontFamily={"marianne"}>{file.user.username}</Td><
                    Td>{new Date(file.upload_at).toLocaleString()}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Center>
    </>
  );
}
