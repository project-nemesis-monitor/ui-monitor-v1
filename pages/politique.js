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
                    - NEMESIS s'engage à collecter uniquement les données personnelles nécessaires à la
                    fourniture de ses services et à des ﬁns commerciales légi9mes.
                    - Les données collectées peuvent inclure des informa9ons telles que le nom, l'adresse,
                    l'adresse e-mail, les informa9ons de paiement, etc.
                    - Les données des u9lisateurs ne seront pas partagées avec des 9ers sans leur
                    consentement explicite, sauf si requis par la loi ou pour fournir les services demandés.

                </Text>


                <Heading fontFamily={"marianne"} mb={4}>2. Sécurité des données :</Heading>
                <Text mb={8} mt={4}>
                    - NEMESIS met en œuvre des mesures de sécurité appropriées pour protéger les données
                    personnelles contre tout accès non autorisé, toute divulga9on, toute altéra9on ou toute
                    destruc9on.
                    - Ces mesures comprennent l'u9lisa9on de pare-feu, de protocoles de cryptage, de
                    chiﬀrement AES256, de contrôles d'accès stricts et de procédures de sécurité des
                    informa9ons.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 3 : Collecte des données</Heading>
                <Text mb={8} mt={4}>Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.


                    En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
                    ·         par mail à l'adresse email espaceaide@nemesis.com
                    ·         via son espace personnel ;
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 4 : Propriété intellectuelle</Heading>
                <Text mb={8} mt={4}>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.

                    L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.

                    Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.

                    Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 5 : Responsabilité</Heading>
                <Text mb={8} mt={4}>
                    Les sources des informations diffusées sur le site www.monsite.com sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.

                    Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site www.monsite.com ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
                    Le site www.monsite.com ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.

                    La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 6 : Liens hypertextes</Heading>
                <Text mb={8} mt={4}>
                    Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site www.monsite.com. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 7 : Cookies</Heading>
                <Text mb={8} mt={4}>
                    L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.

                    Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site www.monsite.com. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.

                    L’information contenue dans les cookies est utilisée pour améliorer le site www.monsite.com.

                    En naviguant sur le site, L’Utilisateur les accepte.
                    L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.
                    A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.
                    L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 8 : Publication par l’Utilisateur</Heading>
                <Text mb={8} mt={4}>
                    Le site permet aux membres de publier les contenus suivants :
                    modification de données.

                    Dans ses publications, le membre s’engage à respecter les règles de la Netiquette (règles de bonne conduite de l’internet) et les règles de droit en vigueur.

                    Le site peut exercer une modération sur les publications et se réserve le droit de refuser leur mise en ligne, sans avoir à s’en justifier auprès du membre.

                    Le membre reste titulaire de l’intégralité de ses droits de propriété intellectuelle. Mais en publiant une publication sur le site, il cède à la société éditrice le droit non exclusif et gratuit de représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication, directement ou par un tiers autorisé, dans le monde entier, sur tout support (numérique ou physique), pour la durée de la propriété intellectuelle. Le Membre cède notamment le droit d'utiliser sa publication sur internet et sur les réseaux de téléphonie mobile.

                    La société éditrice s'engage à faire figurer le nom du membre à proximité de chaque utilisation de sa publication.

                    Tout contenu mis en ligne par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne pas mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces personnes. Tout recours en justice engagé par un tiers lésé contre le site sera pris en charge par l'Utilisateur.

                    Le contenu de l'Utilisateur peut être à tout moment et pour n'importe quelle raison supprimé ou modifié par le site, sans préavis.
                </Text>
                <Heading fontFamily={"marianne"} mb={4}>Article 9 : Droit applicable et juridiction compétente</Heading>
                <Text mb={8} mt={4}>
                    La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                    Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1.
                </Text>
            </Box>
        </>
    )
}