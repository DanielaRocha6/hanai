import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Restaurantes from '../api/restaurantes';
import { Meteor } from "meteor/meteor";

class Restaurante extends Component {
  constructor(props) {
    super(props);
    this.donation = "";
    this.quantity = "";
    this.state = { donaciones: [] };
  }

  onChangeDonation(e) {
    this.donation = e.target.value;
  }

  onClickButton(e) {
    e.preventDefault();
    Meteor.call("insertDonation", this.props.user.username, { donacion: this.donation, cantidad: this.quantity });
    let arr = this.state.donaciones;
    console.log(arr);
    arr.push({ donacion: this.donation, cantidad: this.quantity });
    console.log(arr);
    this.setState({ donaciones: arr });
  }

  onChangeQuantity(e) {
    this.quantity = e.target.value;
  }

  render() {
    return (
      <div>
        <div>
          Donar:
        </div>
        <div>
          <form>
            <label >
              <h2>Qué voy a donar?</h2>
            </label>
            <input type="text" className="form-control" onChange={this.onChangeDonation.bind(this)} placeholder="Que vas a donar?" />
            <label >
              <h2>Cuantas unidades voy a donar?</h2>
            </label>
            <input type="text" className="form-control" onChange={this.onChangeQuantity.bind(this)} placeholder="Cuantas unidades vas a donar?" />
            <div className="form-group">
              <button onClick={this.onClickButton.bind(this)} className="btn btn-primary mb-2 boton2">Enviar</button>
            </div>
          </form>
        </div>
        <div>
          Mis Donaciones:
        </div>
        <div className="historial">
          {this.state.donaciones.map((element) => {
            console.log(element);
            return <div>Donacion: {element.donacion} Cantidad: {element.cantidad}</div>;
          })
          }
        </div>
      </div>);
  }
}

export default withTracker(() => {
  return {
    tasks: Restaurantes.find({}).fetch()
  };
})(Restaurante);

