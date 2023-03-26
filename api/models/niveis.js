'use strict';
module.exports = (sequelize, DataTypes) => {
  const niveis = sequelize.define('niveis', {
    descri_nivel: DataTypes.STRING
  }, {paranoid: true});
  //niveis.associate = function(models) {

  //};
  return niveis;
};