import { Meteor } from 'meteor/meteor';

Meteor.methods({
  createUsers: function(user, id, password, rol, localidad, direccion) {
    Accounts.createUser({
      username: user,
      id: id,
      direccion: direccion,
      localidad:localidad,
      password: password,
      rol: rol
    })
  },
  deleteUser : function(id){
     return Meteor.users.remove(id);
  },
 });


Meteor.startup(() => {});