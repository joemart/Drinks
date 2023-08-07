import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import type {  GetStaticProps, NextPage } from 'next'
import type { Alcohol, Beverages } from '@/models/DrinksType'

import { useState, type ReactNode } from 'react'
import imageLoader from '../../imageLoader'

import Link from "next/link"
import Image from "next/image"

export const getStaticProps: GetStaticProps = async (context) =>{

  const URL = "http://localhost:3000/api/"
  const alcoholicBString = "alcoholicB"
  const nonalcoholicBString = "nonalcoholicB"
  const alcoh : Alcohol = await fetch(URL + alcoholicBString).then(r=>r.json())
  const NONalcoh : Alcohol = await fetch(URL + nonalcoholicBString).then(r=>r.json())
  return {
    props: {
      alcoh
      , NONalcoh
    }
  }
}





export  const Home : NextPage<Beverages> = function (
  {alcoh, NONalcoh}
  ) : ReactNode {


  const [res, setRes] = useState([...alcoh, ...NONalcoh])
  const [slice, setSlice] = useState(0)


  const pageSizeArray = 12
  
  const handleSliceAdd = () =>{
    setSlice(e=>e+1)
  }
  const handleSliceSub = () =>{
    setSlice(e=>e-1)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="DRINKS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.drinkRow}>
        {
          res.slice(slice*pageSizeArray,(slice+1)*pageSizeArray).map(r=> <div key={r.idDrink} className={styles.drinkItem}>
          {r.strDrink}
          <br />

       
            <Link href={`http://localhost:3000/drinks/${r.idDrink}`}>
              <Image
              unoptimized
              loader={imageLoader}
              src={r.strDrinkThumb}
              width={200}
              height={200}
              alt={r.strDrink}
              />
            </Link>
           
          </div>
         
         )
        }
        </div>
        
        <div className={styles.buttons}>
          <button disabled={slice == 0 ? true : false} onClick={handleSliceSub}> Previous </button>
          <button disabled={ Math.round( res.length/pageSizeArray) == slice ? true : false} onClick={handleSliceAdd}> Next </button>
        </div>
        
      </main>
    </>
  )
}

export default Home

