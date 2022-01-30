import React from "react";
import alunos from '../../data/alunos'

export default props => {
  // const list = (
  //   <li>
  //     { alunos[0].id }- { alunos[0].nome } -> { alunos[0].nota }
  //   </li>
  // )

  const listaAlunos = alunos.map(aluno =>{
    return (
      <li key={ aluno.id }>
        { aluno.id }- { aluno.nome } -> { aluno.nota }
      </li>
    )
  }) 

   return (
     <div>
       <ul style = {{ listStyle: 'none' }}>
         {/* <li>{ list }</li> */}
         <li>{ listaAlunos }</li>
       </ul>
     </div>
   )
}