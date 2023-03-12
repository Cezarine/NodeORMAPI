const vDataBase = require('../models/index.js');

class TurmaController{
    static async getAllTurmas(req, res){
        try {
            const vTurma = await vDataBase.turmas.findAll();
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