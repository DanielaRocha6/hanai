import React, { useState, useRef } from "react";
import Distrito from "./Distrito.jsx";
import Restaurante from "./Restaurante.jsx";


const Home = (props) => {
  return(
  <div id="accounts-container">
        {props.user
          ? props.user.profile.rol==="DISTRITO"? <Distrito user={props.user}/>:<Restaurante user={props.user}/>
          :
          <div>
            <button onClick={props.login}>Login</button>
            <button onClick={props.register}>Signup</button>
          </div>
        }
      </div>);
}
 export default Home;