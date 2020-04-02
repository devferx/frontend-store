import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nosotros from "./Nosotros";
import Error from "./Error";
import Productos from "./Productos";
import infoProductos from "../datos/datos.json";
import Header from "./Header";
import SingleProducto from "./SingleProducto";
import Navegacion from "./Navegacion";
import Contacto from "./Contacto";
export default class Router extends Component {
  state = {
    productos: []
  };
  componentWillMount() {
    this.setState({ productos: infoProductos });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Productos productos={this.state.productos} />}
            />
            <Route
              exact
              path="/productos"
              render={() => <Productos productos={this.state.productos} />}
            />
            <Route
              exact
              path="/producto/:productoId"
              render={props => {
                let idProducto = props.location.pathname.replace(
                  "/producto/",
                  ""
                );
                return (
                  <SingleProducto producto={this.state.productos[idProducto]} />
                );
              }}
            />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
