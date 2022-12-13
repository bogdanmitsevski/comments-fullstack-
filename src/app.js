require('dotenv').config();
const express =  require('express');
const sequelize = require('./db');
const models = require('./models/models');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));

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