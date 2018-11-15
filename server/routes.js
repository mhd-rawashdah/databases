var controller = require('./controllers');
var router = require('express').Router();
// work with router express
//Connect controller methods to their corresponding routes
router.get('/messages', function(req, res) {
  controller.messages.get(req, res);
})

router.post('/messages', function(req, res) {
  controller.messages.post(req, res);
});

//router.options('/messages', controller.messages.post);
router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;
