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
    Heading
} from "@chakra-ui/react";

export default function Mentionslegales() {
    return (
        <>
            <Box fontFamily={"marianne"} color={"white"} p={14}>

                <Text fontFamily={"marianne"} mb={4}>
                    Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l&ldquo;&ldquo;Utilisateur&ldquo;, du site www.siteopensourcem1.fr , ci-après le &ldquo;Site&ldquo;, les présentes mentions légales.

                    La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.

                    Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».

                </Text>


                <Heading fontFamily={"marianne"} mb={4}>ARTICLE 1 - L&apos;EDITEUR</Heading>
                <Text mb={8} mt={4}>
                    L’édition et la direction de la publication du Site est assurée par groupe 4 open source, domiciliée 12 rue anatole france, dont le numéro de téléphone est 06000000, et l&apos;adresse e-mail contact@nemesis,com

                    ci-après l&apos;&ldquo;Editeur&ldquo;.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>ARTICLE 2 - L&apos;HEBERGEUR</Heading>
                <Text mb={8} mt={4}>
                    L&apos;hébergeur du Site est la société sitehebergeur, dont le siège social est situé au 5 rue de paris  , avec le numéro de téléphone : 0700000000 + adresse mail de contact
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>ARTICLE 3 - ACCES AU SITE</Heading>
                <Text mb={8} mt={4}>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.

                    En cas de modification, interruption ou suspension du Site, l&apos;Editeur ne saurait être tenu responsable.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>ARTICLE 4 - COLLECTE DES DONNEES</Heading>
                <Text mb={8} mt={4}>
                    Le Site assure à l&apos;Utilisateur une collecte et un traitement d&apos;informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés.

                    En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de ses données personnelles. L&apos;Utilisateur exerce ce droit :
                    ·         par mail à l&apos;adresse email contact@nemesis.com
                    ·         par voie postale au 2 rue des revendications ;
                    ·         via un formulaire de contact ;

                    ·         via son espace personnel ;

                    Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site﻿, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.

                    Pour plus d’informations, se reporter aux CGU du site www.siteopensourcem1.fr accessible à la rubrique &ldquo;CGU&ldquo;
                    Pour plus d&apos;informations en matière de protection des données à caractère personnel , se reporter à la Charte en matière de protection des données à caractère personnel du site www.siteopensourcem1.fr accessible à la rubrique &ldquo;Données personnelles&ldquo;
                    Pour plus d&apos;informations en matière de cookies, se reporter à la Charte en matière de cookies du site www.siteopensourcem1.fr accessible à la rubrique &ldquo;Cookies&ldquo;
                </Text>
                

            </Box>
        </>
    )
}