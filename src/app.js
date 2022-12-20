require('dotenv').config();
const cors = require('cors');
const express =  require('express');
const sequelize = require('./db');
const models = require('./models/models');
const path = require('path');

const app = express();
app.use(express.json());
app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use('/uploads', express.static('uploads'));

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.use('/api', require('./routes/index'));
    }
    catch(e) {
        console.log(e);
    };
};

start();
module.exports = app;