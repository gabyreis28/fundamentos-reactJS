import React from 'react';
import './Card.css';

export default props => {
  const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00'
  };

  return (
    <div className="Card" style={cardStyle}>
      <h1 className="Titulo">{props.titulo}</h1>
      <div className="Conteudo">{props.children}</div>
    </div>
  );
};
