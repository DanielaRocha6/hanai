import React, { useState, useRef } from "react";
import Distrito from "./Distrito.jsx";
import Restaurante from "./Restaurante.jsx";


const Home = (props) => {
  return (
    <div>

      <div id="accounts-container">
        {props.user
          ? props.user.profile.rol==="DISTRITO"? <Distrito/>:<Restaurante user={props.user}/>

          :
          <div>
            <button onClick={props.login}>Login</button>
            <button onClick={props.register}>Signup</button>
            <div className="d-flex justify-content-center">
              <img id="logoComp" src="images/LogoCompleto.png" />
            </div>
          </div>
        }
      </div>
    </div>);
}

export default Home;