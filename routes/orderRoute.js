const express = require('express');
const Order = require('../models/orderModel');

const orderRoute = express.Router();

orderRoute.post("/", async (req, res) => {

    if (!req.body.name
     || !req.body.email
     || !req.body.address
     || !req.body.total
     || !req.body.cartItems){
        return res.send({message: "Data is required."});
     }

    const order = await Order(req.body).save();
    res.send(order);
});

module.exports = orderRoute;