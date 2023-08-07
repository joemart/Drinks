import type { GetStaticPaths, GetStaticProps } from "next"
import { Drink } from "@/models/DrinksType"
import { NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import Image from "next/image"
import imageLoader from "../../../imageLoader"
import style from "../../styles/Drink.module.css"
import AllDrinks from "@/Data/drinks.json"

export const getStaticPaths:GetStaticPaths = async () =>{

    const drinks:Drink[] = await AllDrinks
    const paths = await drinks.map(d=>({params: {drink:d.idDrink}}))
   
    return {
        paths,
        fallback:true
    }

}

export const getStaticProps:GetStaticProps = async({params}) =>{

    const {drink} = params as ParsedUrlQuery
    const drinkArray:Drink[] = await AllDrinks
    
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
    <div className={style.cardParent}>
        <div className={style.card}>
            {drink.strDrink}
            <div className={style.imgClass}>
                {<Image
                src={drink.strDrinkThumb}
                height={0}
                width={0}
                alt= {drink.strDrink}
                unoptimized
                loader={imageLoader}
                sizes="100vw"
                style={{width:"100%", height:"auto"}}
                />}
            </div>
            <button className={style.buttonDrink}>PRESS ME TO DRINK!</button>
        </div>
    </div>
    </>
}

export default DrinkPage