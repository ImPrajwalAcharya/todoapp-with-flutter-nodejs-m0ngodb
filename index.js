const res = require("express/lib/response");
const db = require('./config/db');
const UserModel = require('./model/usermodel')
const app = require("./app");
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello world ! !!');

});
app.listen(port, () => {
    console.log('server is running on the: ' + port);
});

