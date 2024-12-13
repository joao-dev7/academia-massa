const express = require('express');
const financeiroRoutes = require('../controllers/financialController');
const router = express.Router();

router.get('/', financeiroRoutes.getAll);
router.get('/:nome', financeiroRoutes.getPorNome);
router.post('/', financeiroRoutes.create);
router.delete('/:id', financeiroRoutes.delete);
router.put('/:id', financeiroRoutes.update);

module.exports = router;