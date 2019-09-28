import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';
export default class Info extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const links = this.props.links.map(
    //   link => this.makeLink(link)
    // );
    if (this.props.user) {
      return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
            <img id="logo" src="/images/LogoHanai.png" alt="logo"/>
              Nutrimos tu sonrisa</a>
            <div className="form-inline">
              Hello, {this.props.user.username}
            </div>
          </nav>
        </div>
      );
    }
    else {
      return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Nutrimos tu sonrisa</a>
            <form className="form-inline">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.props.login}>Login</button>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.props.register}>Signup</button>
            </form>
          </nav>
        </div>
      );
    }

  }
}


