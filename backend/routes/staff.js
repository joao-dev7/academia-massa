const express = require('express');
const colaboradoresRoutes = require('../controllers/staffController');
const router = express.Router();

router.get('/', colaboradoresRoutes.getAll);
router.get('/:nome', colaboradoresRoutes.getPorNome);
router.post('/', colaboradoresRoutes.create);
router.delete('/:id', colaboradoresRoutes.delete);
router.put('/:id', colaboradoresRoutes.update);

module.exports = router;