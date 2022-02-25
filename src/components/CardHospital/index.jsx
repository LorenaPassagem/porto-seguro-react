import React from "react";

import './index.css';

function CardHospital({img, children}){
    return (
      <>  
        <section className="cardhospital">
            <img src={img}></img>
            {children}
        </section>        
        
     </>   
    )
}
export default CardHospital