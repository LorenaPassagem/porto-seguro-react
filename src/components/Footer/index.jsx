import React from "react";


import FooterPargraph from "../FooterParagraph";
import LogoMarlin from "../LogoMarlin";
import Selo from "../Selo";
import './index.css'

function Footer({text}){
  return (
   <section className="footer">
    <Selo />
    <LogoMarlin />
    <FooterPargraph />
  </section>    
  )
}
export default Footer