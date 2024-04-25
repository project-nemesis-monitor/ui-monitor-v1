import React from 'react';
import { Box } from '@chakra-ui/react';
import Defaultdashboard from './DefaultDashboard';
import GestionUsers from '../gestionusers/GestionUsers';

const DashboardContent = ({ activeTab }) => {
   
    return (
        <Box color={"white"} fontFamily={"marianne"}>
            {activeTab === "dashboard" && <Defaultdashboard/>}
            {activeTab === "user" && <GestionUsers/>}
            {activeTab === "file" && <h1>Formulaire d&apos;ajout de fichier</h1>}

        </Box>
    );
};

export default DashboardContent;
