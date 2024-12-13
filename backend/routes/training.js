const express = require('express');
const treinosRoutes = require('../controllers/trainingController');
const router = express.Router();

router.get('/', treinosRoutes.getAll);
router.get('/:nome', treinosRoutes.getPorNome);
router.post('/', treinosRoutes.create);
router.delete('/:id', treinosRoutes.delete);
router.put('/:id', treinosRoutes.update);

module.exports = router;