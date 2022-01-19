import React, {useState} from "react";
import MenuLateral from "../MenuLateral";
import './index.css'

function Menu(){  
  
  const openMenu = () =>{
    console.log(`Clicou!`)
    const [clicked, setClicked] = useState(close)
    return 
  }
  return (
    <>
      <img className="icon-menu" onClick={openMenu} src='./src/img/menu.png' alt='menu hamburger'></img>
      <ul className="list-menu">
        <li className="list-menu-item"><a href='#'>sobre</a></li>
        <li className="list-menu-item"><a href='#'>hospitais </a></li>      
        <li className="list-menu-item"><a href='#'>benefícios</a></li>
        <li className="list-menu-item"><a href='#'>serviços especiais</a></li>
        <li className="list-menu-item"><a href='#'>contatos </a></li>
      </ul>  
    </> 
 )
}

export default Menu