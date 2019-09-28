import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export default class Censar extends Component {
  constructor(props) {
    super(props);
  }


  añadir() {
    console.log()
  }

  onChangeUser(e) {
    this.valueUser = e.target.value;
  }

  render() {
    if(algo){
    return (
      <div class="container">
      <div class="d-flex justify-content-center">
        <h1>Censar</h1>
      </div>

      <form>
        <label for="formGroupExampleInput">
          <h2>He visto...</h2>
        </label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Registra cantidad de personas en condición de pobreza vistas"/>
          <div class="form-group">
            <button style="margin-top:1rem" onClick={this.añadir.bind(this)} class="btn btn-primary mb-2">Enviar</button>
          </div>
    </form>
  </div>
        );
    }
    else if (lootro) {
      <div class="container">
      <div class="d-flex justify-content-center">
        <h2>Voy a</h2>
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" style="width:15%; margin: 1rem;" class="btn btn-outline-success">Recolectar comida</button>
        <button type="button" style="width:15%; margin: 1rem;" class="btn btn-outline-success">Censar personas en condición de discapacidad</button>
      </div>
    </div>
    }
      }
    }

