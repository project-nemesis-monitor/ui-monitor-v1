import ContainerBlock from "@/components/ContaineBlock";
import { Box, Center, Image, Heading, Text, Button } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function NotFound() {
    return (
        <ContainerBlock>
            <Box textAlign="center" mt={0}>
                <Image src="/404error.gif" alt="404" mx="auto"  />
                <Heading as="h1" fontSize="6xl" mb="6" color="#2645F9">Oops! 404 - Page Not Found</Heading>
                <Text fontSize="xl" mb="6" color="gray.600">Sorry, the page you are looking for does not exist.</Text>

                <Center>
                    <NextLink href="/" passHref>
                        <Button colorScheme="blue" size="lg">Go Home</Button>
                    </NextLink>
                </Center>
            </Box>
        </ContainerBlock>
    )
}
