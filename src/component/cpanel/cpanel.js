
import React from "react";
import XLSX from "xlsx";
import axios from "axios";
import Toast from "../toast/toast";
import Modal from "react-modal";
import { enviroments } from "../../env";
import { useState, useEffect } from "react";
function Cpanel() {
  var [tipo, settipo] = useState("SALIDAS");
  var [tiempo, settiempo] = useState("");
  var [pais, setpais] = useState("COLOMBIA");
  var [numero_vuelo, setnumero_vuelo] = useState("0");
  var [porton, setporton] = useState("");
  var [observacion, setobservacion] = useState("");
  const tipoChange = async (e) => {
    settipo((tipo = e.target.value));
    console.log(tipo);
  };
  const tiempoChange = async (e) => {
    settiempo((tiempo = e.target.value));
    console.log(tiempo);
  };
  const paisChange = async (e) => {
    setpais((pais = e.target.value));
    console.log(pais);
  };
  const numero_vueloChange = async (e) => {
    setnumero_vuelo((numero_vuelo = e.target.value));
    console.log(numero_vuelo);
  };
  const portonChange = async (e) => {
    setporton((porton = e.target.value));
    console.log(porton);
  };
  const observacionChange = async (e) => {
    setobservacion((observacion = e.target.value));
    console.log(observacion);
  };
  const crear = async (e) => {
    e.preventDefault();
    console.log("crear");
    var params={
   tipo,
   tiempo,
   pais,
   numero_vuelo,
   porton,
   observacion

    }
    const ruta = await axios.post(
      enviroments.backendUrl + "/api/crearruta",
      params,
      {
        withCredentials: true,
      }
    );
    if(tipo=="SALIDAS"){
      window.location.href = "/salidas";
    }
    if(tipo=="LLEGADAS"){
      window.location.href = "/llegadas";
    }
    
  };
  function Salir(e) {}
  return (
    <>
      <div className="container">
        <div className="App">
          <div className="card border-success mb-4">
            <div className="card-header bg-transparent border-success lineaverde">
              Rutas
            </div>
            <div className="d-flex justify-content-center">
              <div className="">
                <div className="card-body text-success">
                  <h5 className="card-title">Ingresa tu recorrido</h5>
                  <div className="card-text">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Recorrido
                        </span>
                      </div>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={tipoChange}
                      >
                        <option value="SALIDAS">SALIDAS</option>
                        <option value="LLEGADAS">LLEGADAS</option>
                      </select>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="# Tiempo"
                      aria-label="# tiempo"
                      aria-describedby="basic-addon1"
                      onChange={tiempoChange}
                      maxLength="20"
                    ></input>
                    <br></br>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Pais
                        </span>
                      </div>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={paisChange}
                      >
                        <option defaultValue="COLOMBIA">COLOMBIA</option>
                        <option value="VENEZUELA">VENEZUELA</option>
                        <option value="PERU">PERU</option>
                        <option value="CANADA">CANADA</option>
                        <option value="MEXICO">MEXICO</option>
                        <option value="BOLIVIA">BOLIVIA</option>
                        <option value="CHILE">CHILE</option>
                      </select>
                    </div>

                    <br></br>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Numero de vuelo
                        </span>
                      </div>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={numero_vueloChange}
                      >
                        <option defaultValue="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gates"
                  aria-label="Direccion"
                  aria-describedby="basic-addon1"
                  onChange={portonChange}
                  maxLength="50"
                ></input>
                <br></br>
                <div className="">
                  <div className="card-body text-success">
                    <h5 className="card-title">Observaciones</h5>
                    <div className="card-text">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          maxLength="150"
                          onChange={observacionChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <div className="card-footer bg-transparent border-success lineaverde">
              <button
                className="btn btn-outline-success my-2 my-sm-0 "
                onClick={crear}
              >
                Crear Ruta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cpanel;
