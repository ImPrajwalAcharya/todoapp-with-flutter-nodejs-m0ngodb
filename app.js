const express = require('express');
const bodyparser = require('body-parser');
const userRoute = require('./routes/user_route')
const app = express();
app.use(bodyparser.json());
app.use('/', userRoute)
module.exports = app;
