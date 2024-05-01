// api/updatefile.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId, username, email, role } = req.body;

  try {
    const user = await prisma.users.findMany({
        where: {
            user_id: userId
        }
    });
    if (!user) {
        res.status(401).json({ message: 'fichier invalides' });
                return;
    }
    if (user.length > 0) {
        const searchuser = user[0]
        const updatedUser = await prisma.users.update({
            where: {
              id: searchuser.id,
            },
            data: {
              username,
              email,
              role,
              updated_at: new Date()
            },
          });
        if (updatedUser) {
            res.status(200).json({ message: 'user updated successfully', data: updatedUser });
        } else {
            res.status(401).json({ message: 'Identifiants invalides' });
        }

    }
    

    
  } catch (error) {
    console.error('Error updating file:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
