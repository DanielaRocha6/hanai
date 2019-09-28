import { Meteor } from 'meteor/meteor';
import Restaurantes from '../imports/api/restaurantes.js';

Meteor.methods({
  createUsers: function(user, id, password, rol, localidad, direccion) {
    Accounts.createUser({
      username: user,
      profile:{
        id:id,
        direccion:direccion,
        rol:rol,
        localidad:localidad
      },
      password: password
    })
  },
  createRestaurante: function(id){
    Restaurantes.insert({
      id:id,
      donaciones:[]
    })
  },
  insertDonation: function(username, donacion){
    const res= Restaurantes.findOne({id:username});
    res.donaciones.push(donacion)
    Restaurantes.update({id:username},res);
  }
 });


Meteor.startup(() => {});