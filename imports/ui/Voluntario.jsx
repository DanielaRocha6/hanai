import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export default class Voluntario extends Component {
    constructor(props) {
        super(props);
    }


    censar() {

    }

    render() {
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

