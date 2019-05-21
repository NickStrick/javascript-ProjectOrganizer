const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'add a .env file you dummby';

module.exports = {
    authenticate,
    generateToken,
};

function authenticate(req, res, next) {
    const token = req.get('Authorization');

    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if (err) return res.status(401).json(err);

            req.decoded = decoded;

            next();
        });
    } else {
        return res.status(401).json({ error: 'No token provided' });
    }
}

function generateToken(user) {
    const payload = {
        username: user.username,
    };

    const secret = jwtKey;

    const options = {
        expiresIn: '10m',
    };

    return jwt.sign(payload, secret, options);
};