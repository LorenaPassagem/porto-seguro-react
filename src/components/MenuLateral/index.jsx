import React from "react";

function MenuLateral({toggleMenu}){
    return(
        <div className={`MenuLateral ${isOpen ? 'open-menu':'hide-menu'}`}>menu aqui!</div>
    )
}
export default MenuLateral