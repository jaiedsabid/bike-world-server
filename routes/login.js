const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    // Generate a token
    const { user } = req.body;
    const token = jwt.sign({ user: user }, process.env.JWT_SECREAT_KEY, {
        expiresIn: '7 days',
    });
    res.json({ message: 'login success', accessToken: token });
});

module.exports = router;
