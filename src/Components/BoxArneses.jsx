import React from "react";
import arneses from '../assets/img/modeloArneses.png'

export const BoxArneses = ()=>{
return(
    <>
    <div className="padre arneses">
          <div>
            <img src={arneses} alt="" />
          </div>
          <div className="text-white">
            <h1>ARNESES</h1>
            <p>Listos para la accion</p>
          </div>
      </div>
    </>
)
}