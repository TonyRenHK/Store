const https = require('https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});


//
//http://mp3.baidu.com/dev/api/?tn=getinfo&ct=0&ie=utf-8&word=独角戏&format=json

//https://encrypted.google.com/