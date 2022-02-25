import React from "react";

import './index.css'

function Card({text, title}){
    return (
        <>
            <h2 className="planoOuro-title">{title}</h2>
            <p className="planoOuro-paragrath"> {text}</p>                      
        </>
    )
}
export default Card