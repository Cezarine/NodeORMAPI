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
}

module.exports = PessoaController;