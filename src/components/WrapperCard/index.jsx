import React from "react";
import Card from "../Card";


function WrapperCard({text, title}){
    return (
      <>
        <Card title={title} text={text} />
      </>    
    )
}
export default WrapperCard