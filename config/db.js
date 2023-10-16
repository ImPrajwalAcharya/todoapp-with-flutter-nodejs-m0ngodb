const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/todo";
const connection = mongoose.createConnection(uri).on("open", () => {
    console.log("mongodv connected");

}).on("error", () => {
    console.log("error");
});
module.exports = connection;

