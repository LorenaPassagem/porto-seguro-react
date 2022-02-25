import React from "react";
import './index.css'

function Button({texto, tabela, cobertura, className}){
    return <button className={`button-${className}`}>{texto}</button>
}
export default Button;