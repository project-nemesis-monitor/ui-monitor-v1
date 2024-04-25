import ContainerBlock from "@/components/ContaineBlock";
import Footer from "@/components/Footer";
import Fourpoints from "@/components/landingpage/Fourpoints";
import Landingwithicon from "@/components/landingpage/Landingwithicon";
import Ressourceslink from "@/components/landingpage/Ressourceslink";
import Spacewithgradient from "@/components/landingpage/Spacewithgradient";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get("sessionToken");

    if (isAuthenticated) {
        router.replace("/dashboard")
    }
  }, []);
  const data = [
    {id: 1, title: "Surveillance des Propriétés des Fichiers", description: "Voyez tout, ne manquez rien : Nemesis vous offre un œil vigilant sur chaque modification de vos fichiers, enregistrant méticuleusement chaque événement pour une analyse approfondie ultérieure."},
    {id: 2, title: "Ajout ou suppression des fichiers à surveiller", description: "Personnalisation à votre guise : Ajoutez ou supprimez facilement des fichiers à surveiller selon vos besoins, offrant une flexibilité totale pour une protection sur mesure."},
    {id: 3, title: "Gestion des Droits d'Accès", description: "Contrôle total, tranquillité d'esprit assurée : Modifiez en toute simplicité les autorisations d'accès aux fichiers via une interface utilisateur intuitive, garantissant une gestion précise et sécurisée des droits."},
    {id: 4, title: "Sécurité et Intégrité des Données", description: "Forteresse numérique : Nemesis érige des remparts de sécurité pour protéger vos données sensibles, empêchant tout accès non autorisé et assurant l'intégrité absolue de vos précieuses informations."}
  ]
  return (
    <ContainerBlock>
      <Box pt={"20"}>
        <Landingwithicon iconpath={"/logo1.png"} />
        <Fourpoints data={data} />
        <Spacewithgradient/>
        <Ressourceslink/>
        <Footer/>
      </Box>
    </ContainerBlock>
  )
}
