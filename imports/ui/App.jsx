import React, { useState, useRef } from "react";
import Home from "./Home.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import SignUpDistrito from "./SignUpDistrito.jsx";
import SignUpRestaurante from "./SignUpRestaurante.jsx";
import Navbar from '/imports/ui/Navbar';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';


const App = (props) => {

  const login =()=>{
    props.history.push('/login');
  };

  const register =()=>{
    props.history.push('/signup');
  };

  const registerDistrito=()=>{
    props.history.push('/signup/distrito');
  };

  const registerRestaurante=()=>{
    props.history.push('/signup/restaurante');
  };

  const home=()=>{
    props.history.push("/");
  }


  return (<div>

    <Route path="/" render={() => <Navbar user={props.user} login={login} register={register}/>} />
    <Route exact path="/" render={() => <Home user={props.user} login={login} register={register}/>}/>
    <Route path="/login" component={Login}/>
    <Route exact path="/signup" render={() => <SignUp distrito={registerDistrito} restaurante={registerRestaurante}/>}/>
    <Route exact path="/signup/distrito" render={()=><SignUpDistrito home={home}/>}/>
    <Route exact path="/signup/restaurante" render={()=><SignUpRestaurante home={home}/>}/>
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
