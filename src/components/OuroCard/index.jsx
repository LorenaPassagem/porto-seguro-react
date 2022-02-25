import React from "react";
import Selo from "../Selo";
import Preco from "../Preco";
import Button from "../Button";

function OuroCard(){
    return (
     <section className='planoOuro-card'>
        <p>Plano Ouro</p>
        <Preco />
        <Selo />
        <Button cobertura='cobertura' texto='veja a cobertura completa'/>
        <Button  tabela='tabela' texto='baixe a tabela de preços do plano'/>
     </section>
)
}
export default OuroCard