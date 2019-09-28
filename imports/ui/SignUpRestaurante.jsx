import React, { Component } from 'react';
import {Accounts} from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

class Login extends Component {
  constructor(props){
    super(props);
    this.valueCorreo="";
    this.valueNombre="";
    this.valueDireccion="";
    this.valueLocalidad="";
    this.valuePass="";
    this.valueRPass="";
    this.state={error:false}
  }

  logIn() {
    if(this.valuePass!==this.valueRPass){
      this.setState({error:true})
    }
    else{
      Meteor.subscribe('users');
      Meteor.call("createUsers",this.valueCorreo,this.valueNombre, this.valuePass, "RESTAURANTE", this.valueLocalidad, this.valueDireccion);
      Meteor.loginWithPassword(this.valueCorreo, this.valuePass,(err)=>{
        if(err) throw err;
        this.props.home();
      })
    }
  }

  onChangeCorreo(e){
    this.valueCorreo=e.target.value;
  }

  onChangeNombre(e){
    this.valueNombre=e.target.value;
  }

  onChangeDireccion(e){
    this.valueDireccion=e.target.value;
  }

  onChangeLocalidad(e){
    this.valueLocalidad=e.target.value;
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
            Correo: <input onChange={this.onChangeCorreo.bind(this)} type="text" />
            Nombre: <input onChange={this.onChangePass.bind(this)} type="text" />
            Direccion: <input onChange={this.onChangeDireccion.bind(this)} type="text" />
            Localidad: <input onChange={this.onChangeLocalidad.bind(this)} type="text" />
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
            Correo: <input onChange={this.onChangeCorreo.bind(this)} type="text" />
            Nombre: <input onChange={this.onChangePass.bind(this)} type="text" />
            Direccion: <input onChange={this.onChangeDireccion.bind(this)} type="text" />
            Localidad: <input onChange={this.onChangeLocalidad.bind(this)} type="text" />
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
