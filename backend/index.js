const express = require("express");
require('dotenv').config();
const path = require('path');
const cors = require('cors')
const app = express();

const homeRoutes = require('./routes/home-route');
const HttpError = require('./models/http-error');

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', homeRoutes);

app.use((err, req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.listen(5000)