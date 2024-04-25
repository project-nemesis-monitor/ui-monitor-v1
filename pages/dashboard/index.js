import ContainerBlock from "@/components/ContaineBlock";
import useAuth from "@/middlewares/authMiddleware";
import { useState } from "react";
import DashboardContent from "@/components/dashboardcomponenets/DashboardContent";
import DrawerNavbar from "@/components/DrawerNavbar";
import { Box } from '@chakra-ui/react'

export default function DashboardPage() {
    useAuth()
    const [activeTab, setActiveTab] = useState("dashboard");
    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    return (
        <ContainerBlock>
            <Box p={8}>
                <DrawerNavbar onTabChange={handleTabChange} />
            </Box>
            <DashboardContent activeTab={activeTab} />
        </ContainerBlock>
    )
}