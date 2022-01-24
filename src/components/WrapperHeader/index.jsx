import React from 'react'
import LogoNorteSul from '../Logo-Norte-Sul'
import LogoPorto from '../LogoPorto'
import Menu from '../Menu'
import MenuLateral from '../MenuLateral/MenuLateral'

import './index.css'

function WrapperHeader(){
 return ( 
  <nav className='nav'>
    <LogoNorteSul />
    <LogoPorto />
    <Menu />
  </nav>
 )
}
export default WrapperHeader