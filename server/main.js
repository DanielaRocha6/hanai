import { Meteor } from 'meteor/meteor';

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
  deleteUser : function(id){
     return Meteor.users.remove(id);
  },
 });


Meteor.startup(() => {});