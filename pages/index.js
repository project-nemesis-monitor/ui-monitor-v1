import ContainerBlock from "@/components/ContaineBlock";
import Landingwithicon from "@/components/landingpage/Landingwithicon";
import { Box } from "@chakra-ui/react";
export default function Home() {
  return (
    <ContainerBlock>
      <Box pt={"20"}>
        <Landingwithicon iconpath={"/logo1.png"} />
      </Box>
    </ContainerBlock>
  )
}
