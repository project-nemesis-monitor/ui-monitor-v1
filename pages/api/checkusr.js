import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';


export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const user = await prisma.users.findMany({
        where: {
          username: username
        }
      });

      if (!user) {
        res.status(401).json({ message: 'Identifiants invalides' });
        return;
      }

      if (user.length > 0) {
        const searchuser = user[0]
        const usr = await prisma.users.findUnique({
          where: {
            id: searchuser.id
          }
        })
        if (usr) {
          const passwordMatch = await bcrypt.compare(password, usr.password);
          if (passwordMatch) {
            res.status(200).json({ usr });
          } else {
            res.status(401).json({ message: 'Identifiants invalides' });
          }
        }
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
