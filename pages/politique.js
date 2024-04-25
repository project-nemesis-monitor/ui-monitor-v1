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

export default function PolitiquePage() {
    return (
        <>
            <Box fontFamily={"marianne"} color={"white"} p={14}>
                <Heading fontFamily={"marianne"} mb={4}>1. Collecte et utilisaton des données :</Heading>
                <Text fontFamily={"marianne"} mb={4}>
                    - NEMESIS s&apos;engage à collecter uniquement les données personnelles nécessaires à la
                    fourniture de ses services et à des ﬁns commerciales légitimes.
                    - Les données collectées peuvent inclure des informations telles que le nom, l&apos;adresse,
                    l&apos;adresse e-mail, les informations de paiement, etc.
                    - Les données des utilisateurs ne seront pas partagées avec des tiers sans leur
                    consentement explicite, sauf si requis par la loi ou pour fournir les services demandés.

                </Text>


                <Heading fontFamily={"marianne"} mb={4}>2. Sécurité des données :</Heading>
                <Text mb={8} mt={4}>
                    - NEMESIS met en œuvre des mesures de sécurité appropriées pour protéger les données
                    personnelles contre tout accès non autorisé, toute divulgation, toute altération ou toute
                    destruction.
                    - Ces mesures comprennent l&apos;utilisation de pare-feu, de protocoles de cryptage, de
                    chiﬀrement AES256, de contrôles d&apos;accès stricts et de procédures de sécurité des
                    informations.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>3. Gestion des accès :</Heading>
                <Text mb={8} mt={4}>- L&apos;accès aux données personnelles est strictement limité aux employés qui en ont besoin
                    pour eﬀectuer leur travail.
                    - Tous les employés ayant accès aux données sont formés sur les bonnes pratiques en
                    matière de sécurité et sont tenus de respecter les politiques de sécurité de l&apos;entreprise.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>4. Sécurité des transactions :</Heading>
                <Text mb={8} mt={4}>- Les transactions eﬀectuées sur les plateformes de NEMESIS sont sécurisées à l&apos;aide de
                    protocoles de cryptage et de technologies de sécurité de pointe.
                    - Les informations de paiement sont traitées de manière sécurisée et conformément aux
                    normes de l&apos;industrie.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>5. Gestion des incidents :</Heading>
                <Text mb={8} mt={4}>
                    - NEMESIS dispose d&apos;un plan de gestion des incidents en cas de violation de données ou de
                    tout autre problème de sécurité.
                    - En cas de violation de données, NEMESIS s&apos;engage à informer les autorités compétentes
                    et les utilisateurs concernés dans les délais prescrits par la loi.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>6. Conﬁdentialité et conformité :</Heading>
                <Text mb={8} mt={4}>
                    - NEMESIS respecte les réglementations en matière de protection des données et s&apos;engage
                    à protéger la conﬁdentialité des informations de ses utilisateurs.
                    - Nous nous engageons également à respecter les demandes de nos utilisateurs concernant
                    l&apos;accès, la correction ou la suppression de leurs données personnelles.
                    Cet politique de sécurité est sujet à révision périodique pour garantir sa pertinence et
                    son eﬃcacité. En utilisant les services de NEMESIS, les utilisateurs reconnaissent avoir lu,
                    compris et accepté cett politique de sécurité.
                </Text>

            </Box>
        </>
    )
}