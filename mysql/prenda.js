"use strict";

module.exports = function(sequelize, DataTypes) {
  var prenda = sequelize.define("prenda", {
    id_prendas: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    modelo:{
        type : DataTypes.STRING
    },
    id_marca:{
        type : DataTypes.INTEGER
    },
    epoca:{
      type : DataTypes.STRING
  },
    id_categoria:{
       type : DataTypes.INTEGER
    }
    
    
  }, { freezeTableName: true,
  tableName: 'prenda'});



//Tarjeta.removeAttribute('id');
  return prenda;
};
