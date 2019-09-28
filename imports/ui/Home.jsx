import React, { useState, useRef } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import Distrito from "./Distrito.jsx";

const Home = (props) => {
  return (
    <div>

      <div id="accounts-container">
        {props.user
          ? props.user.profile.rol === "DISTRITO" ? <Distrito /> : <div />
          :
          <div>
            <button onClick={props.login}>Login</button>
            <button onClick={props.register}>Signup</button>
            <div class="d-flex justify-content-center">
              <img id="logoComp" src="images/LogoCompleto.png" />
            </div>
          </div>
        }
      </div>
    </div>);
}
export default withTracker(() => {
  console.log(Meteor, Meteor.user());
  return {
    user: Meteor.user()
  };
})(Home)