import React, { Component } from "react";
import axios from "axios";

export default class TablaJugadores extends Component {
  state = {
    jugadoresNombre: [],
    jugadoresEquipo: [],
    statusJugador: false,
    statusequipo: false,
  };

  loadEquiposNombre = () => {
    console.log("PROPS" + this.props.nombreequipo);

    axios
      .get(
        "https://apiapuestas.azurewebsites.net/api/Jugadores/JugadoresEquipos/" +
          this.props.nombreequipo
      )
      .then((response) => {
        this.setState({
          jugadoresEquipo: response.data,
          statusequipo: true,
        });
      });
  };

  loadNombreJugador = () => {
    console.log("PROPS" + this.props.nombrejugador);
    axios
      .get(
        "https://apiapuestas.azurewebsites.net/api/Jugadores/BuscarJugadores/" +
          this.props.nombrejugador
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          jugadoresNombre: response.data,
          statusJugador: true,
        });
      });
  };

  componentDidMount = () => {
    this.loadEquiposNombre();
    this.loadNombreJugador();
  };

  render() {
    return (
      <div>
        <table className="table table-info">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Posicion</th>
              <th>Pais</th>
            </tr>
          </thead>
          <tbody>
            {this.props.nombreequipo &&
              this.state.jugadoresEquipo.map((e, index) => {
                return (
                  <tr key={index}>
                    <th>
                      <img src={e.imagen} alt="" />
                    </th>
                    <th>{e.nombre}</th>
                    <th>{e.posicion}</th>
                    <th>{e.pais}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
