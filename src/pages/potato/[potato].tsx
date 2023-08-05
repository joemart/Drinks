import type { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async() =>{

    return {
        paths: [{
            params:{
                potato: "1"
            }
        }],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async () =>{

    return {
        props: {
            test:1
        }
    }
}

export const Potato = () =>{
    return <></>
}