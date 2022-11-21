import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export default async function handler(req, res) {
    if( req.method === 'POST'){
        return await updatePlayer(req, res);
    }else{
        return res.status(405).json({ message : 'Method not allowed', success: false});
    }
}



async function updatePlayer (req, res) {
    const body = req.body;
    console.log("in API");
    console.log(body);
    try {
        const newEntry = await prisma.players.upsert({
                         where : {
                                                email: body.email,
                               },
                         update: {
                                                level: body.level,
                         },
                         create:{

                                                username: body.username,
                                                email: body.email,
                                                country: body.country,
                                                level:   body.level,
 
                         }
                          });
                return res.status(200).json(newEntry, {success: true});
        } catch (error) {
                      console.error("Request error", error);
//                      res.status(500).json({ error: "Error adding player", success:false });
                      res.status(500).json({ error: body , success:false });

        }
}


