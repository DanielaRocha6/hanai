import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import "../imports/startup/accounts-config.js"
import Navbar from '/imports/ui/Navbar';

Meteor.startup(() => {
  render(<Navbar />, document.getElementById('navbar'));
  render(<App />, document.getElementById('react-target'));

});
