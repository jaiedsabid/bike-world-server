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

router.get('/:id', async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        return res.json(product);
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

router.post('/update/:id', async (req, res) => {
    try {
        const product = await Products.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;
