import React from "react";
import '../styles/Button.css';

const esOperador=(valor)=>{
  return isNaN(valor) && (valor!==".") && (valor!=="=");
}

function Button(props){
  return(
    <div className={`boton ${esOperador(props.children) ? "operador" : ""}`.trimEnd()} onClick={()=>props.onClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;