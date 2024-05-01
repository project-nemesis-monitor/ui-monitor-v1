

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fileId } = req.body;

  try {
   
    const file = await prisma.checkfile.findUnique({
      where: {
        id: fileId,
      },
    });

    
    if (!file) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    
    await prisma.checkfile.delete({
      where: {
        id: fileId,
      },
    });

    
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
}
