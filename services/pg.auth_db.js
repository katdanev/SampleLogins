const Pool = require('pg').Pool
const pool = new Pool({
//new crypted
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  //old
//   user: 'postgres', 
//   host: 'localhost', 
//   database: 'Auth',
//   password: '07911', // replace with your password
//   port: 5432, // in PGAdmin, right-click on the server and select Properties to find the port number
});

if(DEBUG) console.log("connected to PostgreSQL...");

module.exports = pool;