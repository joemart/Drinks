import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler (
   req: NextApiRequest,
   res: NextApiResponse
) { 
    const {drinks} = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic").then(r=>r.json())
    // console.log("AlcoholicB")
    // console.log(drinks)
    res.status(200).send(drinks)
}