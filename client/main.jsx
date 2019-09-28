import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import Navbar from '/imports/ui/Navbar';


Meteor.startup(() => {
  console.log("vsdsdfsd");
  render(<Navbar />, document.getElementById('navbar'));
  render(<App />, document.getElementById('react-target'));
  
});
