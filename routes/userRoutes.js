const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await userModel.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
