import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const count = await prisma.checkfile.count(); 
            res.status(200).json({ count });
        } catch (error) {
            console.error('Erreur lors du comptage des utilisateurs:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
