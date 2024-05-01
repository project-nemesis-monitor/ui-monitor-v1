import ContainerBlock from "@/components/ContaineBlock";
import Footer from "@/components/Footer";
import FormFile from "@/components/gestionfichiers/FormFile";
import FormUser from "@/components/gestionusers/FormUser";
import useAuth from "@/middlewares/authMiddleware";
import { useRouter } from "next/router"
import { useState } from "react";

export default function UserModify(){
    useAuth()
    const router = useRouter()
    const { id } = router.query
 
    return (
        <ContainerBlock>
            <FormUser identifiant={id}/>
            <Footer/>
        </ContainerBlock>
    )
}