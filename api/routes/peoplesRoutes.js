const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')
const router = Router();

router.get('/pessoas', PessoaController.getAllPeople);
router.get('/pessoas/:id', PessoaController.getPessoa);
router.post('/pessoas', PessoaController.postPessoa);
router.put('/pessoas/:id', PessoaController.putPessoa);
router.delete('/pessoas/:id', PessoaController.deletePessoa);// Não deleta ele inativa

module.exports = router
