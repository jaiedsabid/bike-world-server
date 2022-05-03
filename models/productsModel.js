const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        imageSrc: { type: String, required: true },
        supplier: { type: String, required: true },
        quantity: { type: Number, required: true },
        createdBy: { type: String, required: false },
    },
    { timestamps: true }
);

const ProductsModel = mongoose.model('products', productsSchema);

module.exports = ProductsModel;
