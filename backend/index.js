const express = require("express");
require('dotenv').config();
const path = require('path');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

const homeRoutes = require('./routes/home-route');
const HttpError = require('./models/http-error');

const MONGO_URL = process.env.MONGO_URL;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', homeRoutes);

app.use((err, req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

mongoose.
    connect(MONGO_URL)
    .then(() => {
        app.listen(5000);
    })
    .catch(err => console.log(err));