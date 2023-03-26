const Services = require('./services');
const database = require('../models/index.js');

class MatriculasServices extends Services{
    constructor(){
        super('matriculas');
    }

    async getEnrollmentActives(){
        return database[this.ModelName].findAll()
    }
}
module.exports = MatriculasServices;