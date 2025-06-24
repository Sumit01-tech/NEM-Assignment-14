const express = require('express');
const {
    placeOrder,
    getUserOrders,
    updateOrderStatus
} = require('../controllers/order.controller');

const auth = require('../middleware/auth.middleware');
const router = express.Router();

router.use(auth);

router.post('/', placeOrder);
router.get('/', getUserOrders);
router.patch('/:id', updateOrderStatus);

module.exports = router;
