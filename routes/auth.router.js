const { newToken, verifyToken } = require('../utils/authUtilsFunctions');

const { Router } = require('express');
const User = require('../modelSchemas/User');
const router = Router();

router.post('/login', async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ msg: 'Email and password are required' });
  }
  console.log(req.body);

  try {
    const user = await User.findOne({ email: req.body.email })
      .select('email password')
      .exec();

    if (!user) {
      return res
        .status(401)
        .send({ msg: 'Invalid email and password combination' });
    }

    const matchedUser = await user.checkPassword(req.body.password);

    if (!matchedUser) {
      return res
        .status(401)
        .send({ msg: 'Invalid email and password combination' });
    }

    const token = newToken(user);
    console.log('token login route', token);

    return res.status(200).send({ token });
  } catch (err) {
    return res.status(500);
  }
});

router.post('/register', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ msg: 'Email and password are required' });
  }

  try {
    const user = User.create(req.body);
    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (e) {
    return res.status(500).end();
  }
});

// router.route('/forgot-password');

module.exports = router;
