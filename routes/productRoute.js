const express = require('express');
const Product = require('../models/productModel');

const productRoute = express.Router();

productRoute.get("/", async (req, res) => {

    const products = await Product.find({});

    res.send(products);
});

productRoute.post("/", async (req, res) => {

    const newProduct = new Product(req.body);
    const savesProduct = await newProduct.save();

    res.send(savesProduct);
});

productRoute.delete("/:id", async (req, res) => {

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    res.send(deletedProduct);
});

module.exports = productRoute;

