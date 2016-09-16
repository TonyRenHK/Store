

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello Tony');
})

var server = app.listen(process.env.PORT, function () {
  console.log('Test :  '+process.env.PORT);
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port)

})











/*

// reference the http module so we can create a webserver
var http = require("http");

// create a server
http.createServer(function(req, res) {
    // on every request, we'll output 'Hello world'
    res.end("Hello world123 from Cloud9!");
}).listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console


*/