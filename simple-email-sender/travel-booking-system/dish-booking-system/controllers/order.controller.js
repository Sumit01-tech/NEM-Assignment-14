const Order = require('../models/order.model');
const User = require('../models/user.model');
const sendEmail = require('../utils/email');

exports.placeOrder = async (req, res) => {
    const chefs = await User.find({ role: 'chef' });
    if (chefs.length === 0) return res.status(500).send({ msg: 'No chefs available' });

    const randomChef = chefs[Math.floor(Math.random() * chefs.length)];

    const order = await Order.create({
        user: req.user._id,
        dish: req.body.dish,
        chef: randomChef._id,
        status: 'Order Received'
    });

    res.status(201).send(order);
};

exports.getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).populate('dish');
    res.send(orders);
};

exports.updateOrderStatus = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user dish');

    if (String(order.chef) !== String(req.user._id)) {
        return res.status(403).send({ msg: 'Unauthorized chef' });
    }

    order.status = req.body.status;
    await order.save();

    if (req.body.status === 'Delivered') {
        await sendEmail(
            order.user.email,
            'Dish Delivered',
            `Your order for "${order.dish.name}" has been delivered!`
        );
    }

    res.send(order);
};
