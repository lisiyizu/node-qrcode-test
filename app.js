//学习地址：http://blog.nodejitsu.com/npmawesome-qr-codes/
var qr = require('qr-image');  
var express = require('express');

var app = express();

app.get('/', function(req, res) {  
  var code = qr.image(new Date().toString(), { type: 'svg' });
  res.type('svg');
  code.pipe(res);
});

app.listen(3000);  