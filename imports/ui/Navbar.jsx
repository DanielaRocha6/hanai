import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export default class Info extends Component {
  render() {
    const links = this.props.links.map(
      link => this.makeLink(link)
    );

    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand">Hanai</a>
          <form class="form-inline">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button>
          </form>
        </nav>
      </div>
    );
  }
}


