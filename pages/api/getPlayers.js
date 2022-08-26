// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

/*const feedQuery = groq`
                *[_type == 'player' && !blockPlayer]{
                _id,
                ...
                } | order(_createdAt desc)
                `

const feedQuery = groq`
                *[_type == 'player' ]{
                _id,
                ...
                } | order(level  desc)
                `

type Data = {
 players: Player[] 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const players: player[]= await sanityClient.fetch(feedQuery)
  res.status(200).json({ players })
}

*/
