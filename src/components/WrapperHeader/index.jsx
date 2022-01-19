import React from 'react'
import LogoNorteSul from '../Logo-Norte-Sul'
import LogoPorto from '../LogoPorto'
import Menu from '../Menu'
import MenuLateral from '../MenuLateral'

import './index.css'

function WrapperHeader(){
  return ( 
   <nav className='nav'>
    <LogoNorteSul />
    <LogoPorto />
    <Menu />
    <MenuLateral />
   </nav>
 )
}
export default WrapperHeader