const Dish = require('../models/dish.model');

exports.createDish = async (req, res) => {
    const dish = await Dish.create(req.body);
    res.status(201).send(dish);
};

exports.getDishes = async (req, res) => {
    const dishes = await Dish.find();
    res.send(dishes);
};

exports.updateDish = async (req, res) => {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(dish);
};

exports.deleteDish = async (req, res) => {
    await Dish.findByIdAndDelete(req.params.id);
    res.send({ msg: 'Dish deleted' });
};
