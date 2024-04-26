

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();


export default async function handler(req, res) {
   
    if (req.method == 'POST') {
        const { username, email, permlist, password } = req.body;
        try {
            // Vérifier si le username et l'email sont uniques
            const existingUser = await prisma.users.findFirst({
                where: {
                    OR: [
                        { username: username },
                        { email: email }
                    ]
                }
            });

            if (existingUser) {
                return res.status(400).json({ message: 'Le nom d\'utilisateur ou l\'email existe déjà.' });
            }

            // Générer un UUID unique
            const userId = uuidv4();

            // Créer le nouvel utilisateur
            const hashedPassword = await bcrypt.hash(password, 10);
            const token = jwt.sign({ userId: userId }, 'yH8a*%cR2s#Jq&!m');

            const newUser = await prisma.users.create({
                data: {
                    user_id: userId,
                    username: username,
                    email: email,
                    role: permlist,
                    password: hashedPassword,
                    token: token
                }
            });

            
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            return res.status(500).json({ message: 'Erreur interne du serveur.' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
