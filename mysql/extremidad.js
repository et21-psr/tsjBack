"use strict";

module.exports = function(sequelize, DataTypes) {
  var extremidad = sequelize.define("extremidad", {
    id_extremidad: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    extremidad:{
        type : DataTypes.STRING
    }
    
  }, { freezeTableName: true,
  tableName: 'extremidad'});



//Tarjeta.removeAttribute('id');
  return extremidad;
};
