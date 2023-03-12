const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')
const router = Router();

router.get('/pessoas', PessoaController.getAllPeople);
router.get('/pessoas/:id', PessoaController.getPessoa);
router.get('/pessoas/:estudante_id/matriculas/:id', PessoaController.getMatricula);
router.post('/pessoas', PessoaController.postPessoa);
router.post('/pessoas/:estudante_id/matriculas', PessoaController.postMatricula);
router.put('/pessoas/:id', PessoaController.putPessoa);
router.put('/pessoas/:estudante_id/matriculas/:id', PessoaController.putMatricula);
router.delete('/pessoas/:id', PessoaController.deletePessoa);// Não deleta ele inativa
router.delete('/pessoas/:estudante_id/matriculas/:id', PessoaController.deleteMatricula);// Não deleta ele inativa

module.exports = router
