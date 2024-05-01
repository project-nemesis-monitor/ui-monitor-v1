import ContainerBlock from "@/components/ContaineBlock";
import Footer from "@/components/Footer";
import FormFile from "@/components/gestionfichiers/FormFile";
import useAuth from "@/middlewares/authMiddleware";
import { useRouter } from "next/router"
import { useState } from "react";

export default function FileIDmodify(){
    useAuth()
    const router = useRouter()
    const { id } = router.query
 
    return (
        <ContainerBlock>
            <FormFile identifiant={id}/>
            <Footer/>
        </ContainerBlock>
    )
}