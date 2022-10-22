
import React, { Component } from 'react'
import { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

function Header() {

  function Salir(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  const autenticacion = () => {
    const token = JSON.parse(localStorage.getItem("user"));
    var validar;
    if (token) {
      console.log("hay token");
      validar = true;
    } else {
      console.log("no hay token");
      validar = false;
    }

    return validar;
  };
  function renderadminsalir() {
    if(autenticacion()==true){
      return (
      
        <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={Salir}
      >
        Salir
      </button>
      )
      }
    }
   
    function renderlogin() {
      if(autenticacion()==false){
        return (
        
         <NavLink className="nav-link" to="/login">Iniciar session</NavLink>
          )
      }
      
      }
      function renderadmin() {
        if(autenticacion()==true){
          return (
          
           <NavLink className="nav-link" to="/admin">Admin</NavLink>
            )
        }
        
        }
  return (
    <>
   
    <div className="App">
    

  


    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
     
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Rutas
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="nav-link" to="/salidas">Salidas</NavLink>
        <NavLink className="nav-link" to="/llegadas">Llegadas</NavLink>
       
     
        </div>
      </li>
      <li className="nav-item">
  
      {renderlogin()}   
      <div class="d-flex justify-content-start">
      {renderadmin()}
      {renderadminsalir()}
      </div>
      
      </li>
    </ul>
  </div>
</nav>

    </>
  );
}

export default Header;
