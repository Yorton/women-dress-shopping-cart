const mongoose = require('mongoose');
const shortid = require("shortid");

const orderSchema = new mongoose.Schema({
    _id: {type: String, default: shortid.generate},
    email: {type: String},
    name: {type: String},
    address: {type: String},
    total: {type: Number},
    cartItems: [{
        _id: {type: String},
        title: {type: String},
        price: {type: Number},
        count: {type: Number}
    }]
},{
    timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;

