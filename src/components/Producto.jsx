import React from "react";
import "./productos.css";
import { Link } from "react-router-dom";
const Producto = ({ informacion }) => {
  const { imagen, nombre, precio, id } = informacion;
  return (
    <li>
      <img src={`img/${imagen}.png`} alt={nombre} />
      <p>
        {nombre} <span>$ {precio}</span>
      </p>
      <Link to={`/producto/${id}`} className="btn ">
        Mas informacion
      </Link>
    </li>
  );
};

export default Producto;
