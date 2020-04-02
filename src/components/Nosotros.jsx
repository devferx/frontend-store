import React, { Component } from "react";
import "./nosotros.css";
export default class Nosotros extends Component {
  render() {
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src="/img/camisa_1.png" alt="imagen nostros" />
        </div>
        <div className="contenido">
          <h2>Sobre nosotros</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
            consequatur dolore inventore cupiditate aut praesentium distinctio
            sunt! Distinctio vero earum placeat eos expedita error? Facilis
            eveniet ex rem distinctio aut?
          </p>
        </div>
      </div>
    );
  }
}
