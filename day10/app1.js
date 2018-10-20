var Route1 = require("./route1.js");
var http = require('http');

var server = http.createServer(function (req, res) { 
  var route1 = new Route1(req,res); 
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  if (req.url == '/favicon.ico') {
    return;
  }
  if(req.url=="/"){
    route1.showIndex();
  }else if(req.url=="/info"){
    route1.showInfo();
  }else{
    route1.showError();
  }
});
server.listen(4000, 'localhost');