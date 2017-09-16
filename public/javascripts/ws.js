var host = location.origin.replace(/^http/, 'ws');
var websocket = new WebSocket(host);

websocket.onmessage = function(evt) {
    try {
        var data = JSON.parse(evt.data);
        $('.page').hide();
        switch (data.id) {
            case 'splitwise':
                var percentage = data.percentage;
                var balance = parseInt($('#albana span')[1].innerHTML);
                balance += (42.5 * ((100-percentage) / 100));
                balance = balance.toFixed(2);
                $('#albana span')[1].innerHTML = balance;
                $('#' + data.id).show();
                break;
            case 'transactions':
                $('#albana span')[2].innerHTML = $('#albana span')[1].innerHTML;
                $('#michael span')[2].innerHTML = $('#michael span')[1].innerHTML;
                $('#' + data.id).show();
                break;
            default:
                $('#' + data.id).show();
        }
    } catch (e) {
        content.innerHTML = evt.data;
    }
};

setTimeout(function(){$('#login').show();}, 500)
