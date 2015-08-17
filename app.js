//学习地址: http://blog.nodejitsu.com/npmawesome-qr-codes/
//注意: 中文字符会有点问题
var url = require('url');
var qr = require('qr-image');  
var express = require('express');
var app = express();
server = require('http').createServer(app);

app.get('/svg', function(req, res) {  
  var code = qr.image(req.query.text||'HelloSvgCode', { type: 'svg',ec_level: 'H',margin:2 ,size:parseInt(req.query.size||10) });
  res.type('svg');
  code.pipe(res);
});

app.get('/png', function(req,res){
   var code = qr.image(req.query.text||'HelloPngCode', { type: 'png',parse_url:true, ec_level: 'H',margin:2, size: parseInt(req.query.size||10) });
   res.type('png'); 
   code.pipe(res);
});

server.listen(process.env.PORT || 4000);//publish to heroku  
