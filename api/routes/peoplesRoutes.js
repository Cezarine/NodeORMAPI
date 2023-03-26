const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')
const router = Router();

router.get('/pessoas', PessoaController.getAllPeople);
router.get('/pessoas/actives', PessoaController.getAllPeopleActives);
router.get('/pessoas/:id', PessoaController.getPessoa);
router.get('/pessoas/nome/:nome', PessoaController.getPeopleName);
router.get('/pessoas/:estudante_id/matriculas/:id', PessoaController.getMatriculaEstudante);
router.post('/pessoas', PessoaController.postPessoa);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.put('/pessoas/:id', PessoaController.putPessoa);
router.put('/pessoas/inativa/:id', PessoaController.inativaPeople);
router.put('/pessoas/cancela/:peopleId', PessoaController.cancelPeople);
//router.delete('/pessoas/:id', PessoaController.deletePessoa);// Não deleta ele inativa
router.delete('/pessoas/:id', PessoaController.excluiPessoa);
//router.delete('/pessoas/:estudante_id/matriculas/:id', PessoaController.deleteMatricula);// Não deleta ele inativa

module.exports = router
