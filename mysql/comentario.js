"use strict";

module.exports = function(sequelize, DataTypes) {
  var comentario = sequelize.define("comentario", {
    id_comentario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_publicacion:{
        type : DataTypes.INTEGER
    },
    id_usuario:{
      type : DataTypes.INTEGER
  },
    comentario:{
        type : DataTypes.STRING
    }
  }
    
  , { freezeTableName: true,
  tableName: 'comentario'});



//Tarjeta.removeAttribute('id');
  return comentario;
};
