const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

// Sign-up route
router.post('/signup', async (req, res) => {
  try {
    const { phone_number, name } = req.body;
    const user = await authService.signUpUser(phone_number, name);
    res.status(201).json({ message: 'User signed up successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sign-in route
router.post('/login', async (req, res) => {
  try {
    const { phone_number, otp } = req.body;
    const user = await authService.signInUser(phone_number, otp);
    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
