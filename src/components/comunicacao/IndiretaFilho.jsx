import React, { useState } from 'react'

export default props => {
  const cb = props.quantoclicar
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50
  const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Componete Filho</div>
      {/* <button onClick={
        function (e){
          props.quantoclicar('João', 53, true)
        }
      }> 
        Fornecer Informações
      </button>*/}
       <button onClick={ e => cb('João', gerarIdade(), gerarNerd()) }>
        Fornecer Informações
      </button>
    </div>
  )
}