import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default class Router extends Component {
  render() {
    // function UpdateElement() {
    //   let { id } = useParams();
    //   return <UpdateCoches id={id}></UpdateCoches>;
    //  //Menu Aqui Devolver useParams con Funcion}
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
