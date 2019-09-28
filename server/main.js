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
  insertDonation: function(id, nuevaDonacion){
    console.log(id);
    console.log(nuevaDonacion);
    Restaurantes.findOne({id:id},(err, result)=>{
      if(err) throw console.log(err);
      console.log(result);
    });
  }
 });


Meteor.startup(() => {});