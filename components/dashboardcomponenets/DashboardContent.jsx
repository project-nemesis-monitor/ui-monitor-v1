import React from 'react';
import { Box } from '@chakra-ui/react';
import Defaultdashboard from './DefaultDashboard';

const DashboardContent = ({ activeTab }) => {
   
    return (
        <Box color={"white"} fontFamily={"marianne"}>
            {activeTab === "dashboard" && <Defaultdashboard/>}
            {activeTab === "addUser" && <h1>Formulaire d'ajout d'utilisateur</h1>}
            {activeTab === "addFile" && <h1>Formulaire d'ajout de fichier</h1>}

        </Box>
    );
};

export default DashboardContent;
