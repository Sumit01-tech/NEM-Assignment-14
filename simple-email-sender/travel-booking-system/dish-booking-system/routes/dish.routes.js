const express = require('express');
const { createDish, getDishes, updateDish, deleteDish } = require('../controllers/dish.controller');
const auth = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

const router = express.Router();

router.use(auth);
router.post('/', authorize('admin'), createDish);
router.get('/', getDishes);
router.patch('/:id', authorize('admin'), updateDish);
router.delete('/:id', authorize('admin'), deleteDish);

module.exports = router;
