const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');

router.post('/create', async (req, res) => {
    try {
        const newProduct = await Products.create(req.body);
        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        return res.json(products);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;
