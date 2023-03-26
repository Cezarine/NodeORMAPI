const Services = require('./services');
const database = require('../models/index.js');

class PessoasServices extends Services{
    constructor(){
        super('pessoas');
        this.matriculas = new Services('matriculas');
    }

    async getRegistersActives(where = {}){
        return database[this.ModelName].findAll({where: { ...where}});
    }

    async getAllRegisters(where = {}){
        return database[this.ModelName]
        .scope('todos')
        .findAll({where: { ...where}})
    }

    async cancelPeopleEnrollment(estudanteId){
        return database.sequelize.transaction(async transacao =>{
           await super.updateRegister(
            {ativo: 0}, 
            estudanteId, 
            {transaction: transacao}
            ); 

           await this.matriculas.updateRegisters(
            {status: 'cancelado'}, 
            {estudante_id: estudanteId}, 
            {transaction: transacao}
            );
        });
    }


}
module.exports = PessoasServices;