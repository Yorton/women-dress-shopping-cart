const mongoose = require('mongoose');
const shortid = require("shortid");

const productSchema = new mongoose.Schema({
    _id: {type: String, default: shortid.generate},
    image: {type: String},
    title: {type: String},
    description: {type: String},
    availableSizes: [String],
    price: {type: Number}
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;

