import React from 'react';

export default function Primeiro() {
  const msg =
    'Você chegou e trouxe consigo uma alegria sem fim! Obrigado por nos presentear com sua presença! Seja muito bem-vindo!';

  return (
    <div>
      <h2>Primeiro Componente</h2>
      <p>Seja bem vindo(a)</p>
      <p> {msg} </p>
    </div>
  );
}
