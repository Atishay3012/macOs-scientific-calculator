import React from 'react';

function Button({ name, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
}

export default Button;
