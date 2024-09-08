import React from 'react';
import './PlanProducto.css';


const PlanProducto = ({ planAnual, precio, onChange }) => {
  const tipoPlan = `${planAnual ? 'Anual' : 'Monthly'} Plan`;
  const texPrecio = `$${precio}/ ${planAnual ? 'year' : 'mount'} `
  return (
    <div className="plan-producto">
      <div className="icono">
        <img
          src="icon-music.svg"
          alt="Icono de música"
        />
      </div>
      <div className="detalles-plan">
        <p className="tipo-plan">{tipoPlan}</p>
        <p className="precio">{texPrecio}</p>
      </div>
      <button className="btn-cambiar" onClick={onChange}>
        Change
      </button>
    </div>
  );
};

export default PlanProducto;
