import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

class Login extends Component {
  constructor(props){
    super(props);
    this.valueUser="";
    this.valuePass="";
  }



  logIn() {

  }

  onChangeUser(e){
    this.valueUser=e.target.value;
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.onChangeUser.bind(this)} type="text" value="Username" />
          <input onChange={this.onChangePass.bind(this)} type="text" value="Password" />
        </form>
        <button onClick={this.logIn.bind(this)}>Log in</button>
      </div>
    );
  }
}

export default LoginContainer = withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Login);
