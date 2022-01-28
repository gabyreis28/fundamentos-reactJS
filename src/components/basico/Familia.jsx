import React from "react";
import FamiliaMembros from './FamiliaMembros'

export default props => {
  return (
  <div>
    <FamiliaMembros nome="Ana Paula" sobrenome = { props.sobrenome }/>
    <FamiliaMembros nome="Julia" { ...props }/>
    <FamiliaMembros nome="Gustavo" sobrenome="Silva"/>
  </div>

  )
}