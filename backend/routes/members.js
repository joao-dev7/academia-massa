const express = require('express');
const membersController = require('../controllers/membersController');
const router = express.Router();

router.get('/', membersController.getAll);
router.get('/:nome', membersController.getPorNome);
router.post('/', membersController.create);
router.delete('/:id', membersController.delete);
router.put('/:id', membersController.update);

module.exports = router;