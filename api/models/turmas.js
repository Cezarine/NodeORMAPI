'use strict';
module.exports = (sequelize, DataTypes) => {
  const turmas = sequelize.define('turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  turmas.associate = function(models) {
    /*turmas.hasMany(models.matriculas, {
      foreingKey: 'turma_id'
    })*/
    turmas.belongsTo(models.niveis, {foreignKey: 'nivel_id'});
    turmas.belongsTo(models.pessoas, {foreignKey: 'docente_id'});
  };
  return turmas;
};



