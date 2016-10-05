var unirest = require('unirest');
 var http = require('http');
var countnum=0;


//for (var i = 0; i < 100; i++) {
attackTesting1();

//}


function attackTesting1 (){
   
    var options = {
        host: 'rightknights.com'
    };

    callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function(chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function() {
            console.log('attack Time :'+countnum);
            countnum++;
            attackTesting1();
        });
    }

    http.request(options, callback).end();

}




