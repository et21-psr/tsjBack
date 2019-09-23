"use strict";

module.exports = function(sequelize, DataTypes) {
  var maniquí = sequelize.define("maniqui", {
    id_maniquí: {
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
    id_usuario:{
       type : DataTypes.STRING
    }
    
  }, { freezeTableName: true,
  tableName: 'maniqui'});



//Tarjeta.removeAttribute('id');
  return maniquí;
};
