import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import type{Drink} from "@/models/DrinksType"

//This API function will create a file depending if it exists or not.
//The file will be a json file with all the drinks

export default async function GET ( req:NextApiRequest, res: NextApiResponse ){

    const path = "./src/Data/drinks.json"

    if(fs.existsSync(path))
    {
        console.log("file exists")
    }
    else{
        const allDrinks: Drink[] = await fetch("http://localhost:3000/api/allDrinks").then(r=>r.json())
        const lastDrink = allDrinks[allDrinks.length-1]
        const allDrinksMinusLast = allDrinks.slice(0,-1)

        let file = fs.createWriteStream(path)
        file.on("error", function(e){console.log(e)})
        file.write("[")
        allDrinksMinusLast.forEach((d)=>{
            file.write((`${JSON.stringify(d)},\n`)) })

        file.write(`${JSON.stringify(lastDrink)}`)
        file.write("]")
        file.end()
    }
  



    res.status(200).send({Message:"Success"})
}