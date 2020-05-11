const { Router } = require('express');
const User = require('../modelSchemas/User');

const router = Router();

router.get('/', (req, res) => res.status(200).json(req.user));

router.put('/', (req, res) => {
  try {
    const user = User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      fields: { password: 0, salt: 10 },
    });
    lean().exec();
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).end();
  }
});

module.exports = router;
