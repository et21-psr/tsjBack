"use strict";

module.exports = function(sequelize, DataTypes) {
  var categoria = sequelize.define("categoria", {
    id_categoria: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    cat_padre:{
        type : DataTypes.INTEGER
  },
    nombre:{
        type : DataTypes.STRING
    }
  }
    
  , { freezeTableName: true,
  tableName: 'categoria'});



//Tarjeta.removeAttribute('id');
  return categoria;
};
