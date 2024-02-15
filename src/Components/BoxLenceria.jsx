import React from "react";
import lenceria from '../assets/img/modeloLenceria.png'

export const BoxLenceria = ()=>{
return(
    <>
      <div className="padre lenceria">
          <div>
            <img src={lenceria} alt="" />
          </div>
          <div>
            <h1>LENCERIA</h1>
            <p>La mejor lenceria</p>
          </div>
      </div>
    </>
        
)
}

