import { Box } from "@chakra-ui/react";



export default function ContainerBlock({children}){
    return (
        <Box bg={"#041538"}>
            <main>{children}</main>
        </Box>
    )
}