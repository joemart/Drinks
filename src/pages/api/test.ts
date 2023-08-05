import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function GET ( req:NextApiRequest, res: NextApiResponse ){

    const allDrinks = await fetch("http://localhost:3000/api/allDrinks").then(r=>r.json())
    console.log(process.cwd())
    fs.writeFile("./src/Data/drinks.json", "allDrinks", {encoding:"utf8"}, (e)=>{
        console.log(e)
        
        // return res.status(500).send({Message: e})
    })

    res.status(200).send({Message:"Success"})
}