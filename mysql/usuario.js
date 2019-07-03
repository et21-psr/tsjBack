"use strict";

module.exports = function(sequelize, DataTypes) {
  var usuario = sequelize.define("usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    nombre:{
        type : DataTypes.STRING
    },
    contraseña:{
        type : DataTypes.STRING
    },
    mail:{
       type : DataTypes.STRING
    }
    
  }, { freezeTableName: true,
  tableName: 'usuario'});



//Tarjeta.removeAttribute('id');
  return usuario;
};
