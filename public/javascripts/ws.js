// var ws = new WebSocket("localhost:8080");
var host = location.origin.replace(/^http/, 'ws');

var websocket = new WebSocket(host);

websocket.onmessage = function(evt) {
    // $('#messages').append($('<li>').html(evt.data));
    var content = document.getElementById('alexa');
    try {
        var data = JSON.parse(evt.data);
        $('.page').hide();
        if (data.id) {
            $('#' + data.id).show();
        } else {
            content.innerHTML = evt.data;
        }
    } catch (e) {
        content.innerHTML = evt.data;
    }
};
