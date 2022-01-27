import React from 'react'

import PrimeiroComp from './components/basico/Primeiro'
import ParametroComp from './components/basico/Parametro'
import FragmentoComp from './components/basico/Fragmento'
import Aleatorio from './components/basico/Aleatorio'
import Card from './components/layout/Card'

export default _ => 
  <div>
    <h1>
      Fundamentos React <br></br><br></br>
    </h1>

    <Card titulo="#004 - Desafio Aleatório">
     <Aleatorio min={ 1 } max={ 60 }/>
    </Card>

    <Card titulo="#003 - Fragmento">   
      <FragmentoComp/>
    </Card>

    <Card titulo="#002 - Desafio Com Parametro">
      <ParametroComp titulo="Situação do Aluno" aluno='Pedro Silva' nota={ 8.3 }/>
    </Card>

    <Card titulo="#001 -  Desafio Primeiro Componente">
      <PrimeiroComp></PrimeiroComp>
    </Card>

  </div>