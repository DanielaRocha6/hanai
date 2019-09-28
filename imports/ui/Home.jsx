import React, { useState, useRef } from "react";
import Distrito from "./Distrito.jsx";
import Restaurante from "./Restaurante.jsx";


const Home = (props) => {
  return (
    <div>
      <div id="accounts-container">
        {props.user
          ? props.user.profile.rol==="DISTRITO"? <Distrito home={props.home}/>:<Restaurante user={props.user}/>

          :
          <div>
          <div className="d-flex justify-content-center">
              <img id="logoComp" src="images/LogoCompleto.png" />
           </div>
           <div className="d-flex justify-content-center texto" >
           <p>
             ¿Qué es Hanai? <br/> Hanai es una plataforma web que permite que restaurantes donen comida a personas en condición de pobreza extrema.
            </p>
           </div>
          </div>
        }
      </div>
    </div>);
}

export default Home;