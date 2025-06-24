const User = require('../models/user.model');
const generateToken = require('../utils/generateToken');
const sendEmail = require('../utils/email');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ msg: 'Signup successful' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).send({ msg: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.send({ token });
};

exports.forgotPassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send({ msg: 'User not found' });

    const token = generateToken(user);
    const link = `${process.env.FRONTEND_URL}/reset-password/${token}`;
    await sendEmail(user.email, 'Reset Password', `Click this link to reset: ${link}`);
    res.send({ msg: 'Reset link sent' });
};

exports.resetPassword = async (req, res) => {
    try {
        const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        user.password = req.body.password;
        await user.save();
        res.send({ msg: 'Password reset successful' });
    } catch {
        res.status(400).send({ msg: 'Invalid or expired token' });
    }
};
