const { Router } = require('express');
const vNivelController = require('../controllers/NivelController.js');
const router = Router();

router.get('/niveis', vNivelController.getAllNiveis);
router.get('/niveis/:id', vNivelController.getNivel);
router.post('/niveis', vNivelController.postNivel);
router.put('/niveis/:id', vNivelController.putNivel);
//router.delete('/niveis/:id', vNiveisController.deleteNiveis);// Não deleta ele inativa

module.exports = router
