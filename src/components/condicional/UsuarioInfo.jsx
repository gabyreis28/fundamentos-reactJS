import React from "react";
import If from './if'

export default props => {
  const usuario = props.usuario || {}
  return (
    <div>
      <If validacao = { usuario && usuario.nome }>
      Seja bem-vindo(a), <strong>{ usuario.nome }</strong> !
      </If>
    </div>
  )
}