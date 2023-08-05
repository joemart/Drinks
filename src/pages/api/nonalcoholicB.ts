import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler (
   req: NextApiRequest,
   res: NextApiResponse
) { 
    const {drinks} = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(r=>r.json())
    
    res.status(200).send(drinks)
}