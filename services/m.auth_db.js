

const { MongoClient } = require('mongodb');

const uri = process.env.MDBLOCAL;
//const uri = "mongodb://localhost:27017/";

const atlas = process.env.MDBATLAS;
// const atlas = "mongodb+srv://57318811:57318811@cluster.5hlioub.mongodb.net/?retryWrites=true&w=majority&appName=cluster";

const pool = new MongoClient(uri);
// const pool = new MongoClient(atlas);

if(DEBUG) console.log("connected to MongoDBL...");

module.exports = pool;