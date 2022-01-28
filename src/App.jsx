import React from 'react';
import './App.css'

import WrapperHeader from './components/WrapperHeader';
import Banner from './components/Banner';
import WrapperCard from './components/WrapperCard';
import OuroCard from './components/OuroCard';
import CardHospital from './components/CardHospital';
import Footer from './components/Footer'

import grupoMascara from  '../src/img/grupo-mascara.png';
import mascara7 from '../src/img/grupo-mascara-7.png';
import copaDor from '../src/img/copaDor.png';
import recepcao from '../src/img/recepcao.png'

function App() {  
  return (
    <>
      <main>
        <WrapperHeader />
        <Banner />
        <WrapperCard title='O plano Ouro é ideal para sua empresa'
         text='Com o plano Ouro, os beneficiários contam com uma ampla Rede Referenciada de 
          hospitais e laboratórios, além de terem mais flexibilidade para solicitar o reembolso de consultas e exames, de forma ágil e prática, 
          e o conforto da acomodação hospitalar em apartamento.'/>
        <OuroCard /> 
        <WrapperCard title='Hospitais em destaque'
         text='Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para
         sua empresa as redes mais referenciadas com diversos benefícios para que você tenha 
         um atendimento totalmente personalizado.'/>        
      </main>
      <CardHospital img = {grupoMascara}></ CardHospital>
      <CardHospital img = {mascara7}></ CardHospital>
      <CardHospital img = {copaDor}></ CardHospital>
      <CardHospital img = {recepcao}></ CardHospital>
      <Footer text='rodapé' />
    </>
  )
}
export default App;