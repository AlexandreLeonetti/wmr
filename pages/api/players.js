import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();




export default async function handler(req, res) {
      if (req.method === 'POST') {
                return await addPlayer(req, res);
            }
      else if (req.method === 'GET'){
          return await readPlayers(req, res);
      }
      else {
                return res.status(405).json({ message: 'Method not allowed', success: false });
            }
}


async function readPlayers(req, res){
  const body = req.body;
  try{
 //    const allplayers= await prisma.players.findMany();
   const allplayers= await prisma.players.findMany({orderBy:[{level:'desc'},]});
    return res.status(200).json(allplayers, {success:true});
  }catch (error) {
    console.log(error)
    return res.status(500).json({error: "Error reading from database", success: false});
  }
}

async function addPlayer(req, res) {
      const body = req.body;
      try {
                const newEntry = await prisma.players.create({
                              data: {
                                                username: body.username,
                                                email: body.email,
                                                country: body.country,
                                                level:   body.level
                                            }
                          });
                return res.status(200).json(newEntry, {success: true});
            } catch (error) {
                      console.error("Request error", error);
                      res.status(500).json({ error: "Error adding player", success:false });
                  }
}


/* if player already exist then, select player where email equals session email, update level of this player.*/
