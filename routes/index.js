var express = require('express');
var router = express.Router();

var ws = undefined;

/* GET home page. */
router.get('/ws', function(req, res, next) {
  ws.send('called from outside')
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// var WebSocketServer = require("ws").Server
// var http = require("http")
// // var express = require("express")
// var app = express()
// var port = parseInt(process.env.PORT) + 1 || 5000
//
// app.use(express.static(__dirname + "/"))
//
// var server = http.createServer(app)
// server.listen(port)
//
// console.log("http server listening on %d", port)
//
// var wss = new WebSocketServer({server: server})
// console.log("websocket server created")
//
// wss.on("connection", function(websocket) {
//     ws = websocket;
//   var id = setInterval(function() {
//     ws.send(JSON.stringify(new Date()), function() {  })
//   }, 1000)
//
//   console.log("websocket connection open")
//
//   ws.on("close", function() {
//     console.log("websocket connection close")
//     clearInterval(id)
//   })
// })
// const WebSocket = require('ws');
//
// const wss = new WebSocket.Server({ port: 8080 });
//
// wss.on('connection', function connection(websocket) {
//     ws = websocket;
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });
//
//   ws.send('something');
// });
