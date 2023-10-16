const res = require("express/lib/response");
const db = require('./config/db');
const UserModel = require('./model/usermodel')
const TodoModel = require('./model/todomodel')
const app = require("./app");
const port = 8000;
app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log('server is running on the: ' + port);
});

