"use strict";

module.exports = function(sequelize, DataTypes) {
  var maniqui_extremidad = sequelize.define("maniqui_extremidad", {
    id_maniqui_extremidad: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_maniquí:{
      type : DataTypes.INTEGER
   },
   id_prenda:{
    type : DataTypes.INTEGER
 },
    nombre:{
        type : DataTypes.STRING
    },
    id_extremidad:{
      type : DataTypes.INTEGER
   } 
    
  }, { freezeTableName: true,
  tableName: 'maniqui_extremidad'});



//Tarjeta.removeAttribute('id');
  return maniqui_extremidad;
};
