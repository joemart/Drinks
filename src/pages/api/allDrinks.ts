import type { NextApiRequest, NextApiResponse } from "next";

type ID = {
    drinks: string
}

export default async function GET (req:NextApiRequest,res:NextApiResponse) {
    const AlcoholID : ID[] = await fetch("http://localhost:3000/api/alcoholicB").then(r=>r.json())
    const NONALcoholID : ID[] = await fetch("http://localhost:3000/api/nonalcoholicB").then(r=>r.json())

    res.status(200).send([...AlcoholID, ...NONALcoholID])
}