import './BotonPrimario.css';

import React from 'react';

const BotonPrimario = ({ onClick, label }) => {
  return (
    <div className="boton-primario__container">
      <button className="boton-primario__button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default BotonPrimario;
