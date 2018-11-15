var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', function(req, res) {
  controller.messages.get(req, res);
})

router.post('/messages', controller.messages.post);

//router.options('/messages', controller.messages.post);
router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;
