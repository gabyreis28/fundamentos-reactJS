import React, { useState } from 'react';
import './Input.css';

export default () => {
  const [valor, setValor] = useState('Inicial');

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h4>{valor}</h4>
      <div className="inputCustom">
        <input value={valor} onChange={quandoMudar} />
        {/* <input value={valor} readOnly />;
        <input value={undefined} />; */}
      </div>
    </div>
  );
};
