import React, { useState, useRef } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import Distrito from "./Distrito.jsx";


const Home = (props) => {
  return(
  <div id="accounts-container">
        {props.user
          ? props.user.profile.rol==="DISTRITO"? <Distrito/>:<div/>
          :
          <div>
            <button onClick={props.login}>Login</button>
            <button onClick={props.register}>Signup</button>
          </div>
        }
      </div>);
}
 export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(Home)