const express = require('express');
const bodyparser = require('body-parser');
const userRoute = require('./routes/user_route')
const todoRoute = require('./routes/todo_route')
const app = express();
app.use(bodyparser.json());
app.use('/', userRoute);
app.use('/', todoRoute);
module.exports = app;
