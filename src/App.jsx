import React from 'react'

import PrimeiroComp from './components/basico/Primeiro'
import ParametroComp from './components/basico/Parametro'
import FragmentoComp from './components/basico/Fragmento'
import FamiliaComp from './components/basico/Familia'
import Aleatorio from './components/basico/Aleatorio'
import Card from './components/layout/Card'
import './App.css'

export default () => (
  <div className="App">
    <h1>
      Fundamentos React
    </h1>
      <div className="Cards">
      <Card titulo="#005 - Componente Com Filhos" color="#FA6900">   
        <FamiliaComp sobrenome="Ferreira"/>
      </Card>

      <Card titulo="#004 - Desafio Aleatório" color="#00c8f8">
        <Aleatorio min={ 1 } max={ 60 }/>
      </Card>

      <Card titulo="#003 - Fragmento" color="#E94C6F">   
        <FragmentoComp/>
      </Card>

      <Card titulo="#002 - Desafio Com Parametro" color="#E8B71A">
        <ParametroComp titulo="Situação do Aluno" aluno='Pedro Silva' nota={ 8.3 }/>
      </Card>

      <Card titulo="#001 -  Desafio Primeiro Componente" color="#588C73">
        <PrimeiroComp></PrimeiroComp>
      </Card>
    </div>
  </div>
)