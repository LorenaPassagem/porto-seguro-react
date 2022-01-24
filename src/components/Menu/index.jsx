import React, {useState} from "react";
import './index.css'


function Menu(){    
  const [clicked, setClicked] = useState(false)

  const openMenu = () =>{
    console.log("aquuui!")
    setClicked(!clicked)
  }
  return (
    <>
      <img onClick={openMenu} className="icon-menu" src='./src/img/menu.png' alt='menu hamburger'></img>
      <ul className={`list-menu ${clicked ? 'open-menu': 'hide-menu'}`}>
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