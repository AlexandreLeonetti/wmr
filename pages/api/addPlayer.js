import {  NextApiRequest , NextApiResponse }  from 'next'


export default async function handler(
            req,
            res
       ){
            const data = JSON.parse(req.body); 
           

            const mutations = {
                mutations: [
                    {
                        create: {
                            _type: 'player',
                            country : data.country,
                            username: data.username,
                            blockPlayer: false,
                            level : data.level,
                        }
                    }
                ]
            }

            console.log(typeof data.level);


            const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`


            const result = await fetch(apiEndpoint, { 
                headers:{
                        'content-type' : 'application/json',
                        Authorization : `Bearer ${process.env.SANITY_API_TOKEN}`
                        },
                body:JSON.stringify(mutations),
                method:'POST'
                        
            })

            const jsonData= await result.json();
 
            res.status(200).json({name: 'JD'});
} 
