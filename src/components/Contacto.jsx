import React from "react";
import "./contacto.css";
const Contacto = () => {
  return (
    <form action="">
      <legend>Formulario de contacto</legend>
      <div className="input-field">
        <label htmlFor="">Nombre:</label>
        <input type="text" placeholder="Tu nombre" />
      </div>
      <div className="input-field">
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="Tu email" />
      </div>
      <div className="input-field">
        <label htmlFor="">Mensaje:</label>
        <textarea />
      </div>
      <div className="input-field enviar">
        <input type="text" value="Enviar" />
      </div>
    </form>
  );
};

export default Contacto;
