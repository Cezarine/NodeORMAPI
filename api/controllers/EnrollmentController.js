const { MatriculasServices } = require('../services');
const matriculaServicos = new MatriculasServices();

class EnrollmentController {
    static async getMatriculaAtivas(req, res) {
 //       const { id } = req.params;
        try {
          const Matriculas = await matriculaServicos.getEnrollmentActives();
          return res.status(200).json(Matriculas);
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async getMatriculaAtTurmas(req, res) {
        const { turmaId } = req.params;
        try {
          const Matriculas = await Database.matriculas.findAndCountAll({
            where: {
              turma_id: Number(turmaId),
              status: "confirmado",
            },
            limit: 20,
            order: [["id", "DESC"]],
          });
          return res.status(200).json(Matriculas);
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async getTurmasLotadas(req, res) {
        const lotacao = 2;
        try {
          const Matriculas = await Database.matriculas.findAndCountAll({
            where: {
              status: "confirmado",
            },
            attributes: ["turma_id"],
            group: ["turma_id"],
            having: Sequelize.literal(`count(turma_id) >= ${lotacao}`),
          });
          return res.status(200).json(Matriculas);
        } catch (error) {
          res.status(500).json(error.message);
        }
    }

    static async postMatricula(req, res) {
        const { estudante_id } = req.params;
        const newMatricula = { ...req.body, estudante_id: Number(estudante_id) };
        try {
          const newMatriculaCreate = await Database.matriculas.create(newMatricula);
          return res.status(200).json(newMatriculaCreate);
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async excluiMatricula(req, res) {
        const { estudante_id, id } = req.params;
        try {
          await Database.matriculas.destroy(
            {
              status: String("cancelado"),
            },
            {
              where: {
                id: Number(id),
                estudante_id: Number(estudante_id),
              },
            }
          );
          return res
            .status(200)
            .json({
              message: `A matricula ${id} foi deletado/cancelada com sucesso`,
            });
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async putMatricula(req, res) {
        const { estudante_id, id } = req.params;
        const newInfo = req.body;
        try {
          await Database.matriculas.update(newInfo, {
            where: {
              id: Number(id),
              estudante_id: Number(estudante_id),
            },
          });
          const EnrollmentUpdate = await Database.matriculas.findOne({
            where: { id: Number(id) },
          });
          return res.status(200).json(EnrollmentUpdate);
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }
}

module.exports = EnrollmentController;