var models = require('../models');
 // this function excute inside router
module.exports = {
  messages: {
    get: function (req, res) {
      // call the message.get from modul to apply it;
      models.messages.get(function(data){
        res.json({results:data});
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body[text], req.body[roomname], req.body[username]];
      // call the message.get from modul to apply it;
      models.messages.post(params, function(data){
        res.json('done');
      }) // a function which handles posting a message to the database
    },
    users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
