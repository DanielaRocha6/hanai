import React, { useState, useRef } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";


const Home = (props) => {
  return(
  <div id="accounts-container">
        {props.user
          ?
          <div>
            <button id="user-profile-button" onClick={()=>{}}>{"Hello, "+this.props.user}</button>
          </div>
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