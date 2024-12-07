const express = require('express');
const membersController = require('../controllers/membersController');
const router = express.Router();

router.get('/', membersController.getMembros);
router.get('/:nome', membersController.getMembrosPorNome);
router.post('/', membersController.createMembro);
router.delete('/:id', membersController.deleteMembro);
router.put('/:id', membersController.updateMembro);

module.exports = router;