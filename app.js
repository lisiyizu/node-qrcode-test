//学习地址：http://blog.nodejitsu.com/npmawesome-qr-codes/
var qr = require('qr-image');  
var express = require('express');

var app = express();

app.get('/svg/:text', function(req, res) {  
  var code = qr.image(req.params.text, { type: 'svg' });
  res.type('svg');
  code.pipe(res);
});

app.get('/png/:text', function(req,res){
   var code = qr.image(req.params.text, { type: 'png', ec_level: 'H', size: 10, margin: 0 });
  //res.setHeader('Content-type', 'image/png');
  res.type('png'); 
  code.pipe(res);
  // res.end();
});

app.listen(3000);  
