const Database =  require('../models');

class PessoaController
{
    static async getAllPeople(req, res)
    {
        try
        {
            const allPeoples = await Database.Pessoas.findAll();
            return res.status(200).json(allPeoples);
        }
        catch(error)
        {
            return res.status(500).json(error.message);
        }
    }

    static async getPessoa(req, res){
        const { id } = req.params;
        try{
            const Pessoa = await Database.Pessoas.findOne({where: {id: Number(id)}});
            return res.status(200).json(Pessoa);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async postPessoa(req, res){
        const newPeople = req.body;
        try{
            const newPeopleCreate = await Database.Pessoas.create(newPeople);
            return res.status(200).json(newPeopleCreate);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async putPessoa(req, res){
        const { id } = req.params;
        const newInfo = req.body;
        try{
            await Database.Pessoas.update(newInfo, {where: {id: Number(id)}});
            const PeopleUpdate = await Database.Pessoas.findOne({where: {id: Number(id)}}); 
            return res.status(200).json(PeopleUpdate);
        } catch(error){
            return res.status(500).json(error.message);    
        }
    }

    static async deletePessoa(req, res){
        const { id } = req.params;
        try{
            await Database.Pessoas.update({ativo: Number(0)}, {where: {id: Number(id)}});
            return res.status(200).json({message: `Id ${id} foi deletado com sucesso`});
        } catch(error){
            return res.status(500).json(error.message);    
        }
    }
}

module.exports = PessoaController;