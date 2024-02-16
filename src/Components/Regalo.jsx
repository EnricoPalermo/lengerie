import React from "react";
import gifCard from '../assets/img/gifcard.png'

export const Regalo = ()=>{
return(
    <>
    <div className="padre regalo">
          <div>
            <img src={gifCard} alt=""  width={500}/>
          </div>
          <div className="text-white">
            <h1>GIFCARDS</h1>
            <p>Lo mejor para lso tuyos</p>
          </div>
      </div>
    </>
)
}