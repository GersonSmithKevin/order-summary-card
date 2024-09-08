import './BotonSecundario.css';

import React from 'react';

const BotonSecundario = ({ onClick, label }) => {
  return (
    <div className="boton-secundario__container">
      <button className="boton-secundario__button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default BotonSecundario;
