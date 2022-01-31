import React from 'react';

export default props => {
  const cb = props.quantoclicar;

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
      <button onClick={() => cb('João', 53, true)}>Fornecer Informações</button>
    </div>
  );
};
