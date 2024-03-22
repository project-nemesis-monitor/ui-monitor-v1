import { Box } from "@chakra-ui/react";



export default function ContainerBlock({children}){
    return (
        <Box bg={""}>
            <main>{children}</main>
        </Box>
    )
}