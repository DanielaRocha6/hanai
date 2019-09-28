import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";

class Login extends Component {
  constructor(props){
    super(props);
    this.valueUser="";
    this.valueId="";
    this.valuePass="";
    this.valueRPass="";
    this.state={error:false}
  }

  logIn() {
    if(this.valuePass!==this.valueRPass){
      this.setState({error:true})
    }
    else{
      Meteor.call("createUsers",this.valueUser,this.valueId, this.valuePass, "DISTRITO","","");
      Meteor.loginWithPassword(this.valueCorreo, this.valuePass,(err)=>{
        if(err) throw err;
        this.props.home();
      })
    }
  }

  onChangeUser(e){
    this.valueUser=e.target.value;
  }

  onChangeId(e){
    this.valueId=e.target.value;
  }

  onChangePass(e){
    this.valuePass=e.target.value;
  }

  onChangeRPass(e){
    this.valueRPass=e.target.value;
  }

  render() {
    if(this.state.error){
      return (
        <div>
          <div>
            Error al crear usuario
          </div>
          <form>
          Cedula: <input onChange={this.onChangeUser.bind(this)} type="text" />
          IdDistrito: <input onChange={this.onChangeId.bind(this)} type="text" />
          Contraseña:<input onChange={this.onChangePass.bind(this)} type="password" />
          Repetir Contraseña: <input onChange={this.onChangeRPass.bind(this)} type="password" />
          </form>
          <button onClick={this.logIn.bind(this)}>Sign up</button>
        </div>
      );
    }
    else{
    return (
      <div>
        <form>
          Cedula: <input onChange={this.onChangeUser.bind(this)} type="text" />
          IdDistrito: <input onChange={this.onChangeId.bind(this)} type="text" />
          Contraseña:<input onChange={this.onChangePass.bind(this)} type="password" />
          Repetir Contraseña: <input onChange={this.onChangeRPass.bind(this)} type="password" />
        </form>
        <button onClick={this.logIn.bind(this)}>Sign up</button>
      </div>
    );
    }
  }
}

export default Login;