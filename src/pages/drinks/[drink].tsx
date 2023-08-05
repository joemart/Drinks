import type { GetStaticPaths, GetStaticProps } from "next"
import { Drink } from "@/models/DrinksType"
import { NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import Image from "next/image"
import imageLoader from "../../../imageLoader"
import style from "../../styles/Drink.module.css"

export const getStaticPaths:GetStaticPaths = async () =>{

    const drinks:Drink[] = await fetch("http://localhost:3000/api/allDrinks").then(r=>r.json())
    const paths = await drinks.map(d=>({params: {drink:d.idDrink}}))
   
    return {
        paths,
        fallback:true
    }

}

export const getStaticProps:GetStaticProps = async({params}) =>{

    const {drink} = params as ParsedUrlQuery
    const drinkArray:Drink[] = await fetch("http://localhost:3000/api/allDrinks").then(r=>r.json())
    
    const drinkOBJ = await drinkArray.filter(d=> 
        d.idDrink == drink ? d : null
    )[0]
      

    return {
        props: {
            drink:drinkOBJ
        }
    }

}

const DrinkPage: NextPage<{drink:Drink}> = ({drink}) =>{

    return <>
    <div className={style.card}>
        {drink.strDrink}
        {<Image
        src={drink.strDrinkThumb}
        height={400}
        width={400}
        alt= {drink.strDrink}
        unoptimized
        loader={imageLoader}
        />}

        <button>PRESS ME TO DRINK!</button>
    </div>
    
    </>
}

export default DrinkPage