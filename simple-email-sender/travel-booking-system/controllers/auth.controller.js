const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.signup = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password)))
            return res.status(401).send({ msg: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
