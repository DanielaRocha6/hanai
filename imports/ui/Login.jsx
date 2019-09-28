import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";

class Login extends Component {
  constructor(props) {
    super(props);
    this.valueUser = "";
    this.valuePass = "";
    this.state={error:false};
  }

  logIn() {
    Meteor.loginWithPassword(this.valueUser, this.valuePass, (err) => {
      if(err){
        console.log("Hay un error")
        this.setState({error:true});}
    });
  }

  onChangeUser(e) {
    this.valueUser = e.target.value;
  }

  onChangePass(e) {
    this.valuePass = e.target.value;
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <div>
            Hay un error!!!!!!!
          </div>
          <form>
            User: <input onChange={this.onChangeUser.bind(this)} type="text" />
            Password: <input onChange={this.onChangePass.bind(this)} type="password" />
          </form>
          <button onClick={this.logIn.bind(this)}>Log in</button>
        </div>
      );
    }
    return (
      <div>
        <form>
          User: <input onChange={this.onChangeUser.bind(this)} type="text" />
          Password: <input onChange={this.onChangePass.bind(this)} type="password" />
        </form>
        <button onClick={this.logIn.bind(this)}>Log in</button>
      </div>
    );
  }
}

export default Login;
