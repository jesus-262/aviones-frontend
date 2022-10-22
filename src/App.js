import "./App.css";
//session
import Login from "./component/session/session";
import Cpanel from "./component/cpanel/cpanel";
import Rutas_salida from "./component/rutas/rutas_salida";
import Rutas_llegada from "./component/rutas/rutas_llegada";
import Header from "./component/header/header";
import axios from "axios";
import { enviroments } from './env';
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
function App() {
  var [rol, setrol] = useState();
  useEffect(() => {
    console.log("inicia pagina");
    console.log(autenticacion());
    roles();
  }, []);
  useEffect(() => {
    //console.log("cambio roles");
    console.log("miremos");
    console.log(rol);
  }, [rol]);
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
  const token = () => {
    const token = JSON.parse(localStorage.getItem("user"));

    return token;
  };
  const roles = async () => {
    const token = JSON.parse(localStorage.getItem("user"));
    const params = {
      token: token,
    };
    const userrol = await axios.post(
      enviroments.backendUrl + "/api/getrol",
      params,
      {
        withCredentials: true,
      }
    );
    setrol((rol = userrol.data));
    return userrol.data;
  };
  return (

       
      <BrowserRouter>
         <Header/>
        <Routes>
       
        <Route path="/" element={<Rutas_salida></Rutas_salida>}></Route>
        <Route path="/salidas" element={<Rutas_salida></Rutas_salida>}></Route>
        <Route path="/llegadas" element={<Rutas_llegada></Rutas_llegada>}></Route>
    
    
        
        
        {autenticacion() ? (
            //logeado
     
              <>
                  <Route path="/admin" element={<Cpanel></Cpanel>}></Route>
                  <Route path="/login" element={<Navigate to="/admin"></Navigate>}></Route>
              </>
           
             
             ) : (
              //no logeao
              <>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/admin" element={<Navigate to="/login"></Navigate>}></Route>
              </>
            )}

    
          















          
        
    
     </Routes>
  
      </BrowserRouter>
    

  );
}

export default App;
