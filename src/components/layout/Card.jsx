import React from "react";
import './Card.css'

export default (props) => {
  return (
    <div className="Card">
      <h1 className="Titulo">{ props.titulo }</h1>
      <div className="Conteudo">{ props.children }</div>
    </div>
  )
}