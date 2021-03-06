var host = location.origin.replace(/^http/, 'ws');
var websocket = new WebSocket(host);

websocket.onmessage = function(evt) {
    try {
        var data = JSON.parse(evt.data);
        $('.page').hide();
        switch (data.id) {
            case 'splitwise':
                var percentage = data.percentage;
                // var balance = parseInt($('#albana span')[1].innerHTML);
                var balance = -60; //parseInt($('.albanaBalance')[0].innerHTML);
                balance += (42.5 * ((100-percentage) / 100));
                balance = balance.toFixed(2);
                $('.albanaBalance')[1].innerHTML = balance + " €";
                $('.michaelBalance')[1].innerHTML = "-20,00 €";
                // $('.friend-balance').prepend("You pay " + percentage + " %, Albana has to pay " + (100 - percentage) + " %.");
                $('#ratio')[0].innerHTML = "You pay " + percentage + " %, Albana has to pay " + (100 - percentage) + " %.";
                $('#' + data.id).show();
                break;
            case 'transaction':
            case 'transactions':
                // $('#michael span')[2].innerHTML = $('#michael span')[1].innerHTML;
                $('#' + data.id).show();
                $('#transaction2')[0].innerHTML = ($('.albanaBalance')[1].innerHTML).substring(1);
                break;
            default:
                $('#' + data.id).show();
        }
    } catch (e) {
        // content.innerHTML = evt.data;
    }
};

setTimeout(function(){$('#login').show();}, 800)
