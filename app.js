//学习地址：http://blog.nodejitsu.com/npmawesome-qr-codes/
var qr = require('qr-image');  
var express = require('express');
var app = express();
server = require('http').createServer(app);

app.use('/svg/:text', function(req, res) {  
  var code = qr.image(req.params.text, { type: 'svg',size:10, });
  res.type('svg');
  code.pipe(res);
});

app.use('/png/:text', function(req,res){
   var code = qr.image(req.params.text, { type: 'png', ec_level: 'H', size: 10, margin: 0 });
   res.type('png'); 
   code.pipe(res);
});

server.listen(process.env.PORT || 4000);//publish to heroku  
