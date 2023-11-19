const { MongoClient } = require('mongodb');
const pass = encodeURIComponent("iGdL4q9rbDEDrFEb");
const user = encodeURIComponent("prajwal");
const cluster = encodeURIComponent("cluster12.0hrc4b5.mongodb.net");
console.log(pass);
// const uri = "mongodb+srv://" + user + ":" + pass + "@" + cluster + "/?retryWrites=true&w=majority"

// async function main() {
//     const client = new MongoClient(uri);

//     await client.connect();

//     const database = client.db('user');

//     // Perform any database operations here

//     await client.close();
// }

// main().catch(console.error);