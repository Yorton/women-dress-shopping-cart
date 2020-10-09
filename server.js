const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');
const {MONGODB_URL, PORT} = require('./config');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

const mongodbUrl = MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(express.static('build'));
app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || PORT;
app.listen(port, ()=> console.log(`serve at http://localhost:${port}`));