var http = require('http');
var fs = require("fs");
var url = require("url");
var server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url == '/favicon.ico') {
      return;
    }
    fs.readFile("./form.html",function(err,data){
      if(err){
        console.log(err); //打印错误信息
        res.end("加载页面出错"); //返回信息
      }else{
        res.end(data); //返回读取的数据
      }
    });
    var urlStr = req.url;
    var urlObj = url.parse(urlStr,true);
      if(urlObj.query.username!=null && urlObj.query.password != null){
        console.log("用户名为:"+urlObj.query.username);
        console.log("用户密码是:"+urlObj.query.password);
       res.end("发送数据成功");
    }
});
server.listen(4000, 'localhost');