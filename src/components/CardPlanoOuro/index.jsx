import React from "react";
import Preco from "../Preco";
import Selo from "../Selo";
import './index.css'

function CardPlanoOuro({text}){
    return (
        <>
            <h2 className="planoOuro-title">{text}</h2>
            <p className="planoOuro-paragrath"> Com o plano Ouro, os beneficiários contam com uma ampla Rede Referenciada de
                hospitais e laboratórios, além de terem mais flexibilidade para solicitar o reembolso de consultas e exames,
                de forma ágil e prática, e o conforto da acomodação hospitalar em apartamento.
            </p>
            <section class='planoOuro-card'>
                <p>Plano Ouro</p>
                <Preco />
                <Selo></Selo>
            </section>
        </>
    )
}
export default CardPlanoOuro