const express = require('express');
const {
    createBooking,
    getUserBookings,
    updateBooking,
    deleteBooking,
    getAllBookings
} = require('../controllers/booking.controller');
const authenticate = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware');

const router = express.Router();

router.use(authenticate);

router.post('/', createBooking);
router.get('/', authorize('admin') ? getAllBookings : getUserBookings);
router.patch('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
