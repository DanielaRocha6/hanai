import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export default class Distrito extends Component {
    constructor(props) {
        super(props);
        recolectar = false;
        censo = false;
        localidad = "";
    }


    irRecolectar() {
        recolectar = true;
    }

    irCensar() {
        censo = true;
    }

    onChangeLocalidad(e) {
        this.localidad = e.target.value;

        render(
            <div class="d-flex justify-content-left" style="margin-left: 21rem">
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
        if (!recolectar && !censo) {
            return (
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <h2>Voy a</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="button" onClick={this.irRecolectar.bind(this)} style="width:15%; margin: 1rem;" class="btn btn-outline-success">Recolectar comida</button>
                        <button type="button" onClick={this.irCensar.bind(this)} style="width:15%; margin: 1rem;" class="btn btn-outline-success">Censar personas en condición de discapacidad</button>
                    </div>
                </div>
            );
        }
        else if (recolectar) {
            return (<div class="container">
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
                <div id="restaurantes"></div>
            </div>);
        }
        else if (censo) {
            return (
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <h1>Censar</h1>
                    </div>

                    <form>
                        <label for="formGroupExampleInput">
                            <h2>He visto...</h2>
                        </label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Registra cantidad de personas en condición de pobreza vistas" />
                        <div class="form-group">
                            <button style="margin-top:1rem" onClick={this.censar.bind(this)} class="btn btn-primary mb-2">Enviar</button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

