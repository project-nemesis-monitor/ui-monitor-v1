// api/deleteuser.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId } = req.body;

  try {
   
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    
    await prisma.users.delete({
      where: {
        id: userId,
      },
    });

    
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
}
