import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export default class Distrito extends Component {
    constructor(props) {
        super(props);
        this.localidad = "";
        this.personasTemp=0;
        this.state = {
            censo: false,
            recolectar: false,
            personas:0
        };

    }

    irrecolectar() {
        this.setState({recolectar:true});
        
        console.log(this.state.recolectar)
    }

    irCensar() {
        this.setState({censo:true});
        console.log(this.state.censo)
    }

    censar(e){
        e.preventDefault();
        console.log("----------------------------------------------------", this.personasTemp);
        let actual = parseInt(this.state.personas);
        let temp = parseInt(this.personasTemp);
        this.setState({personas:actual+temp});
        console.log(this.state.personas);
        console.log(this.state.censo);
        
    }

    onChangeLocalidad(e) {

        e.preventDefault();
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
   
    onChangePersonas (e) {
        this.personasTemp = e.target.value;
        console.log(this.personasTemp);
    }

    consultarLocalidad (e) {
        e.preventDefault();
        ReactDOM.render(
            <div className="d-flex justify-content-center">
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

    render() {
        console.log(this.state.censo);
        console.log(this.state.recolectar);
        console.log(this.state.personas);
        
        if (!this.state.recolectar && !this.state.censo) {
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
        else if (this.state.recolectar) {
            return (<div className="container">
                <div className="d-flex justify-content-center">
                    <h1>Censar</h1>
                </div>

                <form>
                    <label >
                        <h2>Mi localidad asignada es...</h2>
                    </label>
                    <select className="form-control" >
                        <option>Usaquen</option>
                        <option>Chapinero</option>
                        <option>Santa Fe</option>
                        <option>San Cristobal</option>
                        <option>Usme</option>
                        <option>Tunjuelito</option>
                        <option>Bosa</option>
                        <option>Kennedy</option>
                        <option>Fontibón</option>
                        <option>Engativá</option>
                        <option>Suba</option>
                        <option>Barrios Unidos</option>
                        <option>Teusaquillo</option>
                        <option>Los Mártires</option>
                        <option>Antonio Nariño</option>
                        <option>Puente Aranda</option>
                        <option>La Candelaria</option>
                        <option>Rafael Uribe Uribe</option>
                        <option>Ciudad Bolivar</option>
                        <option>Sumapaz</option>
                    </select>  
                    <div className="form-group">
                        <button  onClick={this.consultarLocalidad.bind(this)} className="btn btn-primary mb-2 boton2">Enviar</button>
                    </div>
                </form>
                <div className="d-flex justify-content-center">
                    <h3>Restaurantes con comida a donar</h3>
                </div>
                <div id="restaurantes"></div>
            </div>);
        }
        else if (this.state.censo) {
            return (
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h1>Censar</h1>
                    </div>

                    <form>
                        <label >
                            <h2>He visto...</h2>
                        </label>
                        <input type="text" onChange={this.onChangePersonas.bind(this)} className="form-control" placeholder="Registra cantidad de personas en condición de pobreza vistas" />
                        <div className="form-group">
                            <button  onClick={this.censar.bind(this)} className="btn btn-primary mb-2 boton2">Enviar</button>
                        </div>
                    </form>
                Hoy has registrado {this.state.personas} personas en condición de pobreza
                </div>
            );
        }
    }
}

