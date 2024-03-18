

const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
// const atlas = "mongodb+srv://57318811:57318811@cluster.5hlioub.mongodb.net/?retryWrites=true&w=majority&appName=cluster";

const pool = new MongoClient(uri);
// const pool = new MongoClient(atlas);

module.exports = pool;