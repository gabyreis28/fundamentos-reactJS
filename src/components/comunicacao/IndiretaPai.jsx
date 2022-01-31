import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)

  function fornecerInformacoes(nome, idade, nerd){
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }
  
  return (
    <div>
     <div>Componete Pai</div>
     <span>{ nome } </span>
     <span>{ idade } </span>
     <span>{ nerd ? 'Verdade' : 'False' }</span>
      <IndiretaFilho quantoclicar = { fornecerInformacoes } />
    </div>
  )
}