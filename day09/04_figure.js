var http = require('http');
var fs = require("fs");
var server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url == '/favicon.ico') {
      return;
    }
  if(req.url == "/circle"){
      //读取圆形页面
    fs.readFile("./figure/circle.html",function(err,data){
      if(err){
        //读取文件出错了
        res.end("读取页面出错"); //返回信息
      }else{
        //读取文件成功
        res.end(data); //返回读取的数据
      }
    });
  }else if(req.url == "/square"){
    fs.readFile("./figure/square.html",function(err,data){
      if(err){
        //读取文件出错了
        res.end("读取页面出错"); //返回信息
        return;
      }
      res.end(data); //返回读取的数据
    });
  }else{
    res.end("地址错误");
  }
});
server.listen(4000, 'localhost');