

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();


export default async function handler(req, res) {

    if (req.method == 'POST') {
        const { filename, checkMod, path, permissions, userToken } = req.body;
        try {
            const user = await prisma.users.findMany({
                where: {
                    token: userToken
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
                    const fileid = uuidv4();
                    const upload_at = new Date();

                    const newFile = await prisma.checkfile.create({
                        data: {
                            file_id: fileid,
                            filename: filename,
                            check_mod: checkMod === "true" ? true : false,
                            path: path,
                            permissions: permissions,
                            upload_by: usr.user_id,
                            upload_at: upload_at
                        }
                    });
                    if (newFile) {
                        return res.status(200).json({ message: 'fichier ajouté avec succeès !' });
                    }

                } else {
                    res.status(401).json({ message: 'Identifiants invalides' });
                }

            }


           

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
