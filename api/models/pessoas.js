'use strict';
module.exports = (sequelize, DataTypes) =>{
  const pessoas = sequelize.define('pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        ValidaPessoas: function(dado){
          if(dado.length < 3) throw new Error('Nome deve conter mais que 3 caracteres');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'E-mail inválido'
        }
      }
    },
    role: DataTypes.STRING  
  }, {
    paranoid: true,
    defaultScope:{
      where: {ativo: true}
    },
    scopes: {
      todos: { where: {} }, 
      //etc: {contraint: valor}
    }
  });
  return pessoas;
}