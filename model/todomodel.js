const mongoose = require('mongoose');
const db = require('./db');
const userModel = require('../model/usermodel');
const { Schema } = mongoose;
const todoSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    title: {
        type: String,
        required: true

    },
    descriptions: {
        type: String,
        required: true
    }
});
const todoModel = mongoose.model('todotask', todoSchema);
module.exports = todoModel;