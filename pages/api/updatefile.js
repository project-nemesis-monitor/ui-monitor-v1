// api/updatefile.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fileId, filename, path, check_mod, permissions } = req.body;

  try {
    const file = await prisma.checkfile.findMany({
        where: {
            file_id: fileId
        }
    });
    if (!file) {
        res.status(401).json({ message: 'fichier invalides' });
                return;
    }
    if (file.length > 0) {
        const searchfile = file[0]
        const updatedFile = await prisma.checkfile.update({
            where: {
              id: searchfile.id,
            },
            data: {
              filename,
              path,
              check_mod: check_mod === 'true' ? true : false, 
              permissions,
            },
          });
        if (updatedFile) {
            res.status(200).json({ message: 'File updated successfully', data: updatedFile });
        } else {
            res.status(401).json({ message: 'Identifiants invalides' });
        }

    }
    

    
  } catch (error) {
    console.error('Error updating file:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
