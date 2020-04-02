import React from "react";
import "./singleProductos.css";
const SingleProducto = ({ producto }) => {
  const { imagen, nombre, precio, descripcion } = producto;
  return (
    <div className="info-producto">
      <div className="imagen">
        <img src={`/img/${imagen}.png`} alt={nombre} />
      </div>
      <div className="info">
        <h2>{nombre}</h2>
        <p className="precio">{precio}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default SingleProducto;
