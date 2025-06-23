const Booking = require('../models/booking.model');
const sendEmail = require('../utils/email');

exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create({ ...req.body, user: req.user.id });
        await sendEmail(req.user.email, 'Booking Created', `Booking to ${booking.destination} on ${booking.date}`);
        res.status(201).send(booking);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

exports.getUserBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id });
    res.send(bookings);
};

exports.updateBooking = async (req, res) => {
    const booking = await Booking.findOneAndUpdate(
        { _id: req.params.id, user: req.user.id },
        req.body,
        { new: true }
    );
    res.send(booking);
};

exports.deleteBooking = async (req, res) => {
    const booking = await Booking.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (booking) {
        await sendEmail(req.user.email, 'Booking Deleted', `Your booking to ${booking.destination} was cancelled.`);
        res.send({ msg: 'Deleted', booking });
    } else {
        res.status(404).send({ msg: 'Booking not found' });
    }
};

exports.getAllBookings = async (req, res) => {
    const bookings = await Booking.find().populate('user', 'email');
    res.send(bookings);
};
