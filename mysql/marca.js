"use strict";

module.exports = function(sequelize, DataTypes) {
  var marca = sequelize.define("marca", {
    id_marca: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    marca:{
        type : DataTypes.STRING
    },
    logo:{
        type : DataTypes.STRING
    }
  }
    
  , { freezeTableName: true,
  tableName: 'marca'});



//Tarjeta.removeAttribute('id');
  return marca;
};
