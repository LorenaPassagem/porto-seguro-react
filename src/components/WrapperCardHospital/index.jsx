import React from "react";
import CardHospital from "../CardHospital";
import TituloCard from "../TituloCard";

import grupoMascara from "../../img/grupo-mascara.png"
import mascara7 from '../../img/grupo-mascara-7.png'
import copaDor from '../../img/copaDor.png'
import recepcao from '../../img/recepcao.png'

import './index.css'
import Card from "../Card";
import Button from "../Button";
import Seta from "../Seta";


function WrapperCardHospital({}){
    return <section className='WrapperCardHospital'> 
        <CardHospital img = {grupoMascara}>            
            <TituloCard titulo='Hospital Vitória Barra'/>
        </CardHospital>        
        <CardHospital img = {mascara7} >
            <TituloCard titulo='Hospital Perinatal Laranjeiras'/>
            <Seta />
            <Seta />
        </CardHospital>
        
        <CardHospital img = {copaDor}>
            <TituloCard titulo="Hospital Copa D'Or"/>
            <Seta />
        </CardHospital>
        <Card title='Benefícios do plano'/> 
        <CardHospital img = {recepcao} >
            <TituloCard titulo='Rede referenciada'/>
            <p>
                 Com o plano Ouro da Porto Seguro Saúde, você conta com uma rede
                 referenciada de hospitais com toda a comodidade que você e seus 
                 funcionários precisam.
            </p>
            <Button texto='veja a lista completa de hospitais' />              
        </CardHospital>             
    </section>
}
export default WrapperCardHospital