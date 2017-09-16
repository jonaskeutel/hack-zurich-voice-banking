// var ws = new WebSocket("localhost:8080");
var host = location.origin.replace(/^http/, 'ws');
console.log(host);
// host = host.replace(/\d+/, "5000");
// if (host.search(/\d/) === -1) {
//     host += ":5000";
// }
var websocket = new WebSocket(host);
// var websocket = new WebSocket("ws://hack-zurich-voice-banking.herokuapp.com:8080/");


websocket.onmessage = function(evt) {
    // $('#messages').append($('<li>').html(evt.data));
    var content = document.getElementById('alexa');
    content.innerHTML = evt.data;
};
