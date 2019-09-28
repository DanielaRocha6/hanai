import React, { useState, useRef } from "react";
import Home from "./Home.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';


const App = (props) => {

  const login =()=>{
    props.history.push('/login');
  };

  const register =()=>{
    props.history.push('/signup');
  };

  return (<div>
    <Route exact path="/" render={() => <Home login={login} register={register}/>}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
  </div>);
};

const AppWrapper = withTracker(() => {
  return {
    user: Meteor.user()
  };
})(App);

export default () => (
  <div>
     <Router>
          <Route component={AppWrapper} />
     </Router>
 </div>)
