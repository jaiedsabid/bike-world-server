const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/custom-middlewares');
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

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.get('/', verifyToken, async (req, res) => {
    try {
        const userEmail = req.query.user;
        const query = userEmail ? { createdBy: userEmail } : {};
        const products = await Products.find(query, { createdBy: 0 });

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

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.sendStatus(200);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;
