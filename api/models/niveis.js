'use strict';
module.exports = (sequelize, DataTypes) => {
  const niveis = sequelize.define('niveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  niveis.associate = function(models) {
//    niveis.hasMany(models.turmas);
  };
  return niveis;
};