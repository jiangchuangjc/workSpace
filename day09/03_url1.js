var http = require("http");

var url = require("url");

var server = http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){return;}
   console.log(req.url);
   res.end("11111");
});

server.listen("200","localhost");