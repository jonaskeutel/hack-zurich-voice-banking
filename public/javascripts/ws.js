// var ws = new WebSocket("localhost:8080");
var host = location.origin.replace(/^http/, 'ws');
console.log(host);
host = host.replace("3000", "5000");
var websocket = new WebSocket(host);
// var websocket = new WebSocket("ws://hack-zurich-voice-banking.herokuapp.com:8080/");


websocket.onmessage = function(evt) {
    // $('#messages').append($('<li>').html(evt.data));
    var content = document.getElementById('alexa');
    content.innerHTML = evt.data;
};
