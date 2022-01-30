import React from 'react'

import PrimeiroComp from './components/basico/Primeiro'
import ParametroComp from './components/basico/Parametro'
import FragmentoComp from './components/basico/Fragmento'
import FamiliaComp from './components/basico/Familia'
import Aleatorio from './components/basico/Aleatorio'
import FamiliaMembrosComp from './components/basico/FamiliaMembros'
import ListaAlunosComp from './components/repeticao/ListaAlunos'
import TabelaProdutosComp from './components/repeticao/TabelaProdutos'
import ParOuImparComp from './components/condicional/ParOuImpar'
import UsuarioInfoComp from './components/condicional/UsuarioInfo'
import Card from './components/layout/Card'
import './App.css'

export default () => (
  <div className="App">
    <h1>
      Fundamentos React
    </h1>
      <div className="Cards">
      <Card titulo="#008 - Renderização Condicional" color="#2e0b07">   
        <ParOuImparComp numero={ 20 } />
        <UsuarioInfoComp usuario={{ nome: 'Ana' }} />
        <UsuarioInfoComp usuario={{ email: 'Ana@email.com' }} />
      </Card>

      <Card titulo="#007 - Repetição Produtos" color="#954e9a">   
        <TabelaProdutosComp/>
      </Card>

      <Card titulo="#006 - Repetição Alunos" color="#1d274d">   
        <ListaAlunosComp/>
      </Card>

      <Card titulo="#005 - Componente Com Filhos" color="#FA6900">   
        <FamiliaComp sobrenome="Ferreira">
          <FamiliaMembrosComp nome="Ana Paula" />
          <FamiliaMembrosComp nome="Julia" />
          <FamiliaMembrosComp nome="Gustavo"/>
        </FamiliaComp>
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