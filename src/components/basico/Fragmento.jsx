import React from "react";

export default function Fragmento(props){
  return(
    <>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro! erro adjacent, 
        necessário envolver em uma tag, sem atributo
      </p>
      <React.Fragment key="1">
        sem uso da tag div envolvendo, utilizando um atributo
      </React.Fragment>
    </>
  )
}
