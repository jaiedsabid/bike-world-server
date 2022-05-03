const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');

router.post('/create', async (req, res) => {
    try {
        const newProduct = await Products.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
