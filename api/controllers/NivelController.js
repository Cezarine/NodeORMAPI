//const vDataBase = require('../models/index.js');
const {NiveisServices} = require('../services');
const niveisServices = new NiveisServices();

class NivelController{
    static async getAllNiveis(req, res){
        try {
            const AllNiveis = await niveisServices.getAllRegisters(); 
            return res.status(200).json(AllNiveis);     
        } catch (error) {
            return res.status(500).json(error.menssage);    
        }
    }

    static async getNivel(req, res){
        const { id } = req.params;
        try {
            const Nivel = await vDataBase.niveis.findOne({where: { id: Number(id)}});
            return res.status(200).json(Nivel);   
        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async postNivel(req, res){
        const newNivel = req.body;
        try {
            const Nivel = await vDataBase.niveis.create(newNivel);   
            return res.status(200).json(Nivel);
        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }

    static async putNivel(req, res){
        const { id } = req.params;
        const NewInfo = req.body;
        try {
            await vDataBase.niveis.update(NewInfo, {where: {id: Number(id)}}); 
            const NewNivel = await vDataBase.niveis.findOne({where: {id: Number(id)}});
            return res.status(200).json(NewNivel);
        } catch (error) {
            return res.status(500).json(error.menssage);
        }
    }
}

module.exports = NivelController;