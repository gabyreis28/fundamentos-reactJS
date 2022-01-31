import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default () => {
  function fornecerInformacoes(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>Componete Pai</div>
      <IndiretaFilho quantoclicar={fornecerInformacoes} />
    </div>
  );
};
