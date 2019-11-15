const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config');

const User = require('../users/user-model.js');
const validateUser = require('./auth-helpers');

const router = express.Router();


router.post('/login', (req, res) => {
  let user = {username, password } = req.body;

  const validityObj = validateUser(user);

  if (!(validityObj.success)) {
    res.status(400).json(validityObj);
  }

  User.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({message: `Welcome ${user.username}!`, token});
      } else {
        res.status(400).json({message: 'Invalid credentials'});
      }
    })
    .catch(err => {
      res.status(500).json({message: `Login failed: ${err}`});
    })
});

router.post('/register', (req, res) => {
  let user =  {username, password} = req.body;
  const validityObj = validateUser(user);

  if (!(validityObj.success)) {
    res.status(400).json(validityObj);
  }

  const hash = bcrypt.hashSync(password, 12);
  user.password = hash;

  User.add(user)
  .then(user => {
    res.status(201).json(user);
  })
  .catch (err => {
    res.status(500).json({ message: 'Registration failed: ' + err });
  });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1h"
  }

  return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;
