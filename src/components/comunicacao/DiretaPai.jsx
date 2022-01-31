import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
  return (
    <div>
      <DiretaFilho nome = "Marcio" idade = { 20 } nerd = { true }/>
      <DiretaFilho nome = "Gabriel" idade = { 18 } nerd = { false }/>
    </div>
  )
}