import React from "react";
import Navegador from "../Components/Navegador";
import { BoxLenceria } from "../Components/BoxLenceria";
import { BoxArneses } from "../Components/BoxArneses";

export const HomePage = ()=>{
return(
<>
        <Navegador/>
        <BoxLenceria/>
        <BoxArneses/>
</>
)
}