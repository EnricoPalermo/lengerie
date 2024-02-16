import React from "react";
import Navegador from "../Components/Navegador";
import { BoxLenceria } from "../Components/BoxLenceria";
import { BoxArneses } from "../Components/BoxArneses";
import { Footer } from "../Components/Footer";
import { Regalos } from "../Components/Regalos";

export const HomePage = ()=>{
return(
<>
        <Navegador/>
        <BoxLenceria/>
        <BoxArneses/>
        <Regalos/>
        <Footer/>
</>
)
}