const config = require('../config/keys');
const jwt = require('jsonwebtoken');
const User = require('../modelSchemas/User');

const newToken = (user) =>
  jwt.sign({ id: user.id }, config.jwt, { expiresIn: config.jwtExp });

exports.newToken = newToken;

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secretOrKey, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

exports.verifyToken = verifyToken;

const protect = async (req, res, next) => {
  const bearer = req.header.authorization;

  if (!bearer || !bearer.startWith('Bearer ')) {
    return res.status(401).end();
  }

  const token = bearer.spilt('Bearer ')[1].trim();

  if (!token) {
    return res.status(500).end();
  }

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).end();
  }
  const user = await User.findById(payload.id)
    .select('-password')
    .lean()
    .exec();

  if (!user) {
    return res.status(401).end();
  }
  req.user = user;
  return next();
};

exports.protect = protect;
