import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
           
            const users = await prisma.users.findMany({});
            
            res.status(200).json({ users });
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
