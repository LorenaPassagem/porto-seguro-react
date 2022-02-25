import React from "react";
import Button from "../Button";
import Preco from "../Preco";
import './index.css'

function Banner(){
    return <section className="banner">
        <h2 className="banner-title">
            Conforto e qualidade para levar 
            bem-estar com alto padrão de atendimento a seus funcionários.
        </h2>
        <Preco /><Button texto='ver mais' className='banner'/>
        
    </section>
}
export default Banner