const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userController = require('../controllers/userController');


// POST /api/users/register
router.post('/register', userController.registerUser);

// POST /api/users/login
router.post('/login', userController.loginUser);

// GET /api/users (protected)
router.get('/', auth, userController.getUsers);

module.exports = router;
