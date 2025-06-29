const jwt = require('jsonwebtoken');

module.exports = function generateToken(user) {
    return jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
};
