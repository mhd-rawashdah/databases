var db = require('../db');

module.exports = {
  messages: {
    get: function (call) {
      var messages;
      db.connect(function(err) {
        if (err) {
          console.log("Error Connected???" , err);
          return;
        }
        console.log("Connected!");
        var sql = 'select users.id, users.name as "username", messages.message as "text", messages.romeName as "roomname" from messages inner join users on messages.userId = users.id;';
        db.query(sql, function (err, result){
          if (err){
            console.log('Insert Error', err);
            return;
          }
          messages = result;

          db.end(function(){
            call(messages)
          });



        });
      });
    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
