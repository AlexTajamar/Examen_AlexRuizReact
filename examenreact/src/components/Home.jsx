import React, { Component } from "react";
import axios from "axios";
import TablaJugadores from "./TablaJugadores";

export default class Home extends Component {
  selectEquipos = React.createRef();
  jugador = React.createRef();

  url = "https://apiapuestas.azurewebsites.net/api/Equipos";
  state = {
    equipos: [],
    nombreequipo: "",
    nombrejugador: "",
  };
  nombrejugador = (event) => {
    event.preventDefault();
    console.log(this.jugador.current.value);
    this.setState({
      nombrejugador: this.jugador.current.value,
    });
  };
  equiponombre = (event) => {
    event.preventDefault();
    console.log(this.selectEquipos.current.value);
    this.setState({
      nombreequipo: this.selectEquipos.current.value,
    });
  };
  loadEquipos = () => {
    axios
      .get("https://apiapuestas.azurewebsites.net/api/Equipos")
      .then((response) => {
        this.setState({
          equipos: response.data,
        });
      });
  };
  componentDidMount = () => {
    this.loadEquipos();
  };
  render() {
    return (
      <div>
        <h1>Buscar Jugadores</h1>
        <label>Buscar jugador por Nombre</label>
        <input type="text" ref={this.jugador} />
        <button onClick={this.nombrejugador}>Nombre del jugador</button>
        <br />
        <select ref={this.selectEquipos}>
          {this.state.equipos.map((equipo, index) => {
            return (
              <div>
                <option key={index} value={equipo.idEquipo}>
                  {equipo.nombre}
                </option>
              </div>
            );
          })}
        </select>
        <button onClick={this.equiponombre}>Jugadores Por equipo</button>
        {this.state.nombreequipo && (
          <TablaJugadores nombreequipo={this.selectEquipos.current.value} />
        )}
        {this.state.nombrejugador && (
          <TablaJugadores nombrejugador={this.jugador.current.value} />
        )}
      </div>
    );
  }
}
