import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const files = await prisma.checkfile.findMany({
                take: 4,
                orderBy: {
                    upload_at: 'desc' 
                },
                
            });
            const users = await prisma.users.findMany({
                where: {
                    user_id: {
                        in: files.map(file => file.upload_by)
                    }
                }
            });
            const filesWithUsers = files.map(file => {
                const user = users.find(user => user.user_id === file.upload_by);
                return { ...file, user };
            });
            res.status(200).json({ files: filesWithUsers });
        } catch (error) {
            console.error('Erreur lors de la récupération des fichiers:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
