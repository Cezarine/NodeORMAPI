//const vDataBase = require('../models/index.js');
const Sequelize = require('sequelize');
const {TurmasServices} = require('../services');
const turmaServices = new TurmasServices();
const Op = Sequelize.Op;
class TurmaController{
    static async getAllTurmas(req, res){
        const {date_first, date_last} = req.query;
        const where = {};
        date_first || date_last ? where.data_inicio = {} : null;
        date_first ? where.data_inicio[Op.gte] = date_first : null;
        date_last ? where.data_inicio[Op.lte] = date_last: null;
        try{
            const vTurma = await turmaServices.getAllRegisters({where});
            return res.status(200).json(vTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }    
    }

    static async getTurma(req, res){
        const { id } = req.params;
        try {
            const vTurma = await vDataBase.turmas.findOne({where: {id: Number(id)}});
            return res.status(200).json(vTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async postTurma(req, res){
        const vNewTurma = req.body;
        try {
            const vTurma = await vDataBase.turmas.create(vNewTurma);
            return res.status(200).json(vTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async putTurma(req, res){
        const { id } = req.params;
        const bodyTurma = req.body;
        try {
            await vDataBase.turmas.update(bodyTurma, {where: {id: Number(id)}});
            const vTurma = await vDataBase.turmas.findOne({where: {id: Number(id)}});
            return res.status(200).json(vTurma);
        } catch (error) {
           return res.status(500).json(error.message); 
        }
    }

}
module.exports = TurmaController;