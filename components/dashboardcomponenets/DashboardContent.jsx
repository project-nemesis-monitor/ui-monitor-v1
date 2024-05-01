import React from 'react';
import { Box } from '@chakra-ui/react';
import Defaultdashboard from './DefaultDashboard';
import GestionUsers from '../gestionusers/GestionUsers';
import GestionFiles from '../gestionfichiers/GestionFiles';

const DashboardContent = ({ activeTab }) => {
   
    return (
        <Box color={"white"} fontFamily={"marianne"}>
            {activeTab === "dashboard" && <Defaultdashboard/>}
            {activeTab === "user" && <GestionUsers/>}
            {activeTab === "file" && <GestionFiles/>}

        </Box>
    );
};

export default DashboardContent;
