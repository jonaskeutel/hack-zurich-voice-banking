// var ws = new WebSocket("localhost:8080");
var websocket = new WebSocket("ws://localhost:8080/");

// ws.on('open', function open() {
//     alert('connection open');
//   ws.send('something');
// });
//
// ws.on('message', function incoming(data) {
//   console.log(data);
//   alert(data);
// });

websocket.onmessage = function(evt) {
    // $('#messages').append($('<li>').html(evt.data));
    var content = document.getElementById('alexa');
    content.innerHTML = 'Changed by websocket';
};
