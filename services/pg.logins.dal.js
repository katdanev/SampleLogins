const dal = require("./pg.auth_db"); // Import the connection pool from the DAL

//get all logins.
var getLogins = function() {
  if(DEBUG) console.log("logins.pg.dal.getLogins()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT id AS _id, username, password FROM public."Logins" \
        ORDER BY id DESC LIMIT 7;` // put this SQL in a file, тобто ми витягуємо з бази даних 7 останніх логінів (в нас їх три по факту)
    dal.query(sql, [], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};

// get a login by id
var getLoginByLoginId = function(id) {
  if(DEBUG) console.log("logins.pg.dal.getLoginByLoginId()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT id AS _id, username, password FROM public."Logins" WHERE id = $1`;
    dal.query(sql, [id], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};
// add a login
var addLogin = function(username, password) {
  if(DEBUG) console.log("logins.pg.dal.addLogin()");
  return new Promise(function(resolve, reject) {
    const sql = `INSERT INTO public."Logins"(username, password) \
        VALUES ($1, $2);`;
    dal.query(sql, [username, password], (err, result) => {
      if (err) {
          if(DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};

var patchLogin = function(id, username, password) {
  if(DEBUG) console.log("logins.pg.dal.patchLogin()");
  return new Promise(function(resolve, reject) {
    const sql = `UPDATE public."Logins" SET username=$2, password=$3 WHERE id=$1;`;
    dal.query(sql, [id, username, password], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};

var deleteLogin = function(id) {
  if(DEBUG) console.log("logins.pg.dal.deleteLogin()");
  return new Promise(function(resolve, reject) {
    const sql = `DELETE FROM public."Logins" WHERE id = $1;`;
    dal.query(sql, [id], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};


module.exports = {
  getLogins,
  addLogin,
  getLoginByLoginId,
  patchLogin,
  deleteLogin
}