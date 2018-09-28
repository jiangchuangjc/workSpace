var http = require("http");

var server = http.createServer(function(req,res){
   if(req.url  == "/favicon.ico"){
     return;
   }
   res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  //  返回数据,但是不结束请求
   res.write("第一次返回数据");
   res.write("<h3>第二次返回数据</h3>")
   res.write("<h1>第三次返回数据</h1>")
   //结束请求,并返回数据
   res.end("返回数据");
});
server.listen(4000,"localhost");