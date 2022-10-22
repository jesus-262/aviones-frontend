import React from "react";
import XLSX from "xlsx";
import axios from "axios";
import Toast from "../toast/toast";
import Modal from "react-modal";
import { enviroments } from "../../env";
import { useState, useEffect } from "react";

function Rutas(props) {
  const [llegadas, setllegadas] = useState([]);
  const [titulo, settitulo] = useState("");
  const [salidas, setsalidas] = useState();
  const inicio = () => {
    // Update the document title using the browser API
    const llega = axios
      .get(enviroments.backendUrl + "/api/verrutassalidas")
      .then((data) => {
        console.log(data.data);
        setllegadas(data.data);
        settitulo(data.data[0].tipo);
      });
    // setllegadas((llegadas = llega));
  };

  useEffect(inicio, []);

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <h1>{titulo}</h1>
      </div>
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">TIPO</th>
              <th scope="col">TIEMPO</th>
              <th scope="col">PAIS</th>
              <th scope="col">N* DE VUELO</th>
              <th scope="col">PUERTA</th>
              <th scope="col">OBSERVACION</th>
            </tr>
          </thead>
          <tbody>
            {llegadas.map((llegadas) => (
              <tr key={llegadas.id}>
                <td>{llegadas.id}</td>
                <td>{llegadas.tipo}</td>
                <td>{llegadas.tiempo}</td>
                <td>{llegadas.pais}</td>

                <td>{llegadas.numero_vuelo}</td>
                <td>{llegadas.porton}</td>
                <td>{llegadas.observacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rutas;
