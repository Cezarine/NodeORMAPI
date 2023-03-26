const database = require('../models/index.js');

class Services {
    constructor(ModelName) {
        this.ModelName = ModelName;
    }

    async getAllRegisters() {
        return database[this.ModelName].findAll();
    }

    async getOneRegister(id){
        return database[this.ModelName].findOne({id: id});
    }

    async createRegister(data){

    }

    async updateRegister(data, id, transacao = {}){
        return database[this.ModelName].update(data, {where: {id: id}}, transacao)
    }

    async updateRegisters(data, where, transacao = {}){
        return database[this.ModelName].update(data, {where: {...where}}, transacao)
    }

    async deleteRegister(id){
        
    }
}
module.exports = Services;