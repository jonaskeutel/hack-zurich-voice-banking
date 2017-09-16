// var ws = new WebSocket("localhost:8080");
var host = location.origin.replace(/^http/, 'ws');

var websocket = new WebSocket(host);

websocket.onmessage = function(evt) {
    // $('#messages').append($('<li>').html(evt.data));
    var content = document.getElementById('alexa');
    try {
        var data = JSON.parse(evt.data);
        $('.page').hide();
        switch (data.id) {
            case 'splitwise':
                var percentage = data.percentage;
                var balance = parseInt($('#albana span')[1].innerHTML);
                balance -= (balance * percentage / 100).toFixed(2);
                $('#albana span')[1].innerHTML = balance;
                $('#' + data.id).show();
                break;
            default:
                $('#' + data.id).show();

        }
        // if (data.id) {
        // } else {
        //     content.innerHTML = evt.data;
        // }
    } catch (e) {
        content.innerHTML = evt.data;
    }
};
