// db.js
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://prajwal:prajwal@cluster0.bwpjkt7.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
// mongoose.Promise = global.Promise;
// // Connect mongodb at default port 27017 in a DB called UserDB. You can change the name of the DB here.
// mongoose.connect('mongodb://localhost:27017/UserDB', {
//    useNewUrlParser: true,
//    useCreateIndex: true,
//    useUnifiedTopology: true
// }, (err) => {
//    if (!err) {
//       console.log('MongoDB Connection Succeeded.')
//    } else {
//       console.error('Error in DB connection: ' + err)
//    }
// });
module.exports = mongoose;