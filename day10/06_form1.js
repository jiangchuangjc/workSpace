var http = require('http');
var fs = require('fs');
var qs = require("querystring");
var server = http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  if (req.url == '/favicon.ico') {
    return;
  }
  if(req.url == "/"){
      fs.readFile("./06_form.html",function(err,data){
          if(err){
              console.log(err);
              res.end("文件读取错误！");
              return;
          }
          res.end(data);
      })
  }else if(req.url == "/submit" && req.method.toLowerCase()=="post"){
      var allData = "";
      req.addListener("data",function(chunk){
          allData += chunk;
      })

      req.on("end",function(){
          var uname = qs.parse(allData).username;
          var upass = qs.parse(allData).password;
          if(uname && upass){
              res.end("用户名为:"+uname+"<br>密码是:"+upass);
          }else{
              res.end("<h3 style='color:red'>请输入完整的用户名和密码！</h3>");
          }
      })
  }
});
server.listen(4000, 'localhost');