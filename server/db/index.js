var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "password",
     //insecureAuth : true,
     database: 'chat'
});


module.exports = dbConnection;


/// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'  (inside mysql)
// var sql = 'INSERT INTO users (id, name) VALUES (null,"Ozil");'
// dbConnection.query(sql, function (err, result){
//   if (err){
//     console.log('Insert Error', err);
//     return;
//   }
//   console.log('Success',result);
//   dbConnection.end();
//
// })
