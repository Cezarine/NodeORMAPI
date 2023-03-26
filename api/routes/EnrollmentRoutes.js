const { Router } = require('express');
const EnrollmentController = require('../controllers/EnrollmentController.js');
const router = Router();


router.get('/matriculas', EnrollmentController.getMatriculaAtivas);
router.get('/pessoas/matriculas/:turmaId/confirmados', EnrollmentController.getMatriculaAtTurmas);
router.get('/pessoas/matriculas/lotadas', EnrollmentController.getTurmasLotadas);
router.post('/pessoas/:estudante_id/matriculas', EnrollmentController.postMatricula);
router.delete('/pessoas/:estudante_id/matriculas/:id', EnrollmentController.excluiMatricula);
router.put('/pessoas/:estudante_id/matriculas/:id', EnrollmentController.putMatricula);

module.exports = router;