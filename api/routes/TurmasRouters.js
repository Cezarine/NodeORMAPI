const { Router } = require('express');
const vTurmaController = require('../controllers/TurmaController.js');
const router = Router();

router.get('/turmas', vTurmaController.getAllTurmas);
router.get('/turmas/:id', vTurmaController.getTurma);
router.post('/turmas', vTurmaController.postTurma);
router.put('/turmas/:id', vTurmaController.putTurma);

module.exports = router;