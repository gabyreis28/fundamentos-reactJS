import React from 'react';

export default props => {
  return (
    <div>
      <button onClick={props.setIncrementar}>+</button>
      <button onClick={props.setDecrementar}>-</button>
    </div>
  );
};
