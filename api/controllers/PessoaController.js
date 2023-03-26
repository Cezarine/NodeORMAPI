//const Database = require("../models/index.js");
//const Sequelize = require("sequelize");
const {PessoasServices} = require('../services');
const pessoasServices = new PessoasServices();

class PessoaController {
  static async getAllPeopleActives(req, res) {
    try {
      const allPeoples = await pessoasServices.getRegistersActives();
      return res.status(200).json(allPeoples);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllPeople(req, res) {
    try {
      const allPeoples = await pessoasServices.getAllRegisters();
      return res.status(200).json(allPeoples);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPessoa(req, res) {
    const { id } = req.params;
    try {
      const Pessoa = await Database.pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(Pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPeopleName(req, res) {
    const { nome } = req.params;
    try {
      const result = await Database.pessoas.findOne({
        where: { nome: String(nome) },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getMatriculaEstudante(req, res) {
    const { estudante_id, id } = req.params;
    try {
      const Matricula = await Database.matriculas.findOne({
        where: {
          id: Number(id),
          estudante_id: Number(estudante_id),
        },
      });
      return res.status(200).json(Matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async postPessoa(req, res) {
    const newPeople = req.body;
    try {
      const newPeopleCreate = await Database.pessoas.create(newPeople);
      return res.status(200).json(newPeopleCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async putPessoa(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await Database.pessoas.update(newInfo, { where: { id: Number(id) } });
      const PeopleUpdate = await Database.pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(PeopleUpdate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {
      await Database.pessoas.update(
        { ativo: Number(1) },
        { where: { id: Number(id) } }
      );
      await Database.pessoas.restore({ where: { id: Number(id) } });
      return res.status(200).json(`Id ${id} restaurado com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //DELETA realmente uma pessoas
  static async excluiPessoa(req, res) {
    const { id } = req.params;
    try {
      await Database.pessoas.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ message: `Id ${id} foi deletado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async inativaPeople(req, res) {
    const { id } = req.params;
    try {
      await Database.pessoas.update(
        { ativo: Number(0) },
        { where: { id: Number(id) } }
      );
      return res
        .status(200)
        .json({ message: `Id ${id} foi inativado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cancelPeople(req, res) {
    const { peopleId } = req.params;
    try {
      await pessoasServices.cancelPeopleEnrollment(Number(peopleId));
      return res.status(200).json({message: `A matricula e a pessoa ${peopleId} foi deletado/cancelada com sucesso`,});
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
module.exports = PessoaController;
