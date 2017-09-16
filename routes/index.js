var express = require('express');
var router = express.Router();
var global = require('../public/javascripts/global.js');

/* GET home page. */
router.get('/ws', function(req, res, next) {
    var id = req.query.id;

    global.ws.send(JSON.stringify({id: id}));
    res.send("OK");
});

// router.get('/ws', function(req, res, next) {
//     global.ws.send('called from outside');
//     res.send("OK");
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
