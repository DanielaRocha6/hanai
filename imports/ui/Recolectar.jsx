import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export default class Recolectar extends Component {
  constructor(props) {
    super(props);
  }


  consultarLocalidad() {
    console.log()
  }

  onChangeUser(e) {
    this.valueUser = e.target.value;
  }

  render() {
    if(algo){
    return ( <div class="container">
    <div class="d-flex justify-content-center">
      <h1>Censar</h1>
    </div>

    <form>
      <label for="formGroupExampleInput">
        <h2>Mi localidad asignada es...</h2>
      </label>
      <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>  <div class="form-group">
          <button style="margin-top:1rem" onClick={this.consultarLocalidad.bind(this)} class="btn btn-primary mb-2">Enviar</button>
        </div>
  </form>
  <div class="d-flex justify-content-center">
    <h3>Restaurantes con comida a donar</h3>
  </div>
  <div class="d-flex justify-content-left" style="margin-left: 21rem">
    <ol>
      <li>Restaurante
        <ul>
          <li>Dirección</li>
          <li>x platos</li>
        </ul>
      </li>

      <li>Restaurante
          <ul>
            <li>Dirección</li>
            <li>x platos</li>
          </ul>
        </li>

        <li>Restaurante
            <ul>
              <li>Dirección</li>
              <li>x platos</li>
            </ul>
          </li>
    </ol>
  </div>
</div>  );
    } 
return null;
}
}
