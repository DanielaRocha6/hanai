import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export default class Distrito extends Component {
    constructor(props) {
        super(props);
        this.recolectar = false;
        this.censo = false;
        this.localidad = "";
    }


    irrecolectar() {
        this.recolectar = true;
    }

    irCensar() {
        this.censo = true;
    }

    onChangeLocalidad(e) {
        this.localidad = e.target.value;

        render(
            <div className="d-flex justify-content-left divDistrito">
                <ol>
                    <li>Restaurante Doña Blanca
                        <ul>
                            <li>Cll. 27 #13-23</li>
                            <li>6 platos</li>
                        </ul>
                    </li>

                    <li>Restaurante Anita
                        <ul>
                            <li>Cll. 85 # 112-22</li>
                            <li>15 platos</li>
                        </ul>
                    </li>

                    <li>Restaurante La Plancha
                        <ul>
                            <li>Cll. 28 # 49-35</li>
                            <li>3 platos</li>
                        </ul>
                    </li>
                </ol>
            </div>
            , document.getElementById('restaurantes'));
    }
    censar() {

    }

    render() {
        if (!this.recolectar && !this.censo) {
            return (
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h2>Voy a</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={this.irrecolectar.bind(this)}  className="btn btn-outline-success boton"> Recolectar comida</button>
                        <button type="button" onClick={this.irCensar.bind(this)} className="btn btn-outline-success boton">Censar personas en condición de discapacidad</button>
                    </div>
                </div>
            );
        }
        else if (this.recolectar) {
            return (<div className="container">
                <div className="d-flex justify-content-center">
                    <h1>Censar</h1>
                </div>

                <form>
                    <label for="formGroupExampleInput">
                        <h2>Mi this.localidad asignada es...</h2>
                    </label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>  <div className="form-group">
                        <button  onClick={this.consultarLocalidad.bind(this)} className="btn btn-primary mb-2 boton2">Enviar</button>
                    </div>
                </form>
                <div className="d-flex justify-content-center">
                    <h3>Restaurantes con comida a donar</h3>
                </div>
                <div id="restaurantes"></div>
            </div>);
        }
        else if (this.censo) {
            return (
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h1>Censar</h1>
                    </div>

                    <form>
                        <label for="formGroupExampleInput">
                            <h2>He visto...</h2>
                        </label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Registra cantidad de personas en condición de pobreza vistas" />
                        <div className="form-group">
                            <button  onClick={this.censar.bind(this)} className="btn btn-primary mb-2 boton2">Enviar</button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

