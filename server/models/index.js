var db = require('../db');
// here to make function to make connection with database
// we make import by using db file to make connection with database

module.exports = {
  messages: {
    // pass callback function to pass the result from the query
    get: function (callback) {
      console.log("Connected!");
      //var sql = 'select users.id, users.name as "username", messages.message as "text", messages.romeName as "roomname" from messages inner join users on messages.userId = users.id;';
      var sql = 'select users.name as "username",messages.id, messages.message as "text",messages.romeName as "roomname" \
        from messages inner join users on messages.userId = users.id;';
      // to make query from the database use query method that take two parameter  sql query, function(error, result)
      db.query(sql, function (err, result){
        if (err){
          console.log('Insert Error', err);
          return;
        }
         // pass the result query for the callback
         callback(result)
      });

    }, // a function which produces all the messages
    post: function (params, callback) {
      console.log("Connected!");
      var sql = `insert into messages (message, romeName,userId) values (${params[0]}, ${params[1]}, (select id from users where userName = ${param[2]}))`;
      db.query(sql, function (err, result){
        if (err){
          console.log('Insert Error', err);
          return;
        }
         callback(result)
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log("Connected!");
      var sql = 'select * from users';
      db.query(sql, function (err, result){
        if (err){
          console.log('Insert Error', err);
          return;
        }
         callback(result)
      });
    },
    post: function (params, callback) {
      console.log("Connected!");
      var sql = 'insert into users values(?);'
      db.query(sql, function (err, result){
        if (err){
          console.log('Insert Error', err);
          return;
        }
         callback(result)
      });
    }
  }
};
