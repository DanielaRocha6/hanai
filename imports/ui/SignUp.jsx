import React, { useState, useRef } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";


const Home = (props) => {
  return(
  <div id="accounts-container">
        {props.user
          ?
          <div>
          </div>
          :
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-success" onClick={props.distrito}>Registro usuario Distrito</button>
            <button className="btn btn-outline-success" onClick={props.restaurante}>Registro usuario Restaurante</button>
          </div>
        }
      </div>);
}
 export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(Home)