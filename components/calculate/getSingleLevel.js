import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//getSingleLevel functions.


export default async function handler(req, res){
    if(req.method === 'GET'){
        return await readUniquePlayer(req,res);
    }else{
                return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}


async function readUniquePlayer(req,res) {
    const body = req.body;
    try{
        const uniquePlayer = await prisma.players.findUnique({
            where: {
                email:body.email,
            },
        });
        return res.status(200).json(uniquePlayer, {success:true});
    }catch( error ) {
        console.log(error)
        return res.status(500).json({ error:"Error reading from database",  success: false});
    }
}
