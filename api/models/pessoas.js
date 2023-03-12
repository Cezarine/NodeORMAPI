'use strict';
module.exports = (sequelize, DataTypes) =>
{
  const pessoas = sequelize.define('pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING  
  }, {});
  pessoas.associate = function (models)
  {
 /*pessoas.hasMany(models.turmas);
    pessoas.hasMany(models.matriculas, {
      foreingKey: 'estudante_id'
    });*/
  };
  return pessoas;
}