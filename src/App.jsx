import React from 'react';
import './App.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import WrapperCardOuro from './components/WrapperCardOuro';
import WrapperHeader from './components/WrapperHeader';

function App() {  
  return (
    <>
      <main>
        <WrapperHeader />
        <Banner />
        <WrapperCardOuro />
      </main> 
      <Footer text='rodapé' />
    </>  
    
  )
}

export default App;
