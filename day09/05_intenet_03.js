var http = require('http');
var fs = require("fs");
var url = require("url");
var server = http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url == '/favicon.ico') {
      return;
    }
    urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    console.log(pathname);
    console.log(query);
    if(req.url == "/"){
       fs.readFile("./form.html",function(err,data){
           if(err){
               console.log(err);
               res.end("页面加载出错");
               return;
           }
           res.end(data);
       })
    }else if(pathname == "/submit"){
        var uname = query.username;
        var upass = query.password;
            if(uname && upass){
            res.end("用户名是:"+uname+",密码是:"+upass);
          }else{
              res.end("<h3>请输入完整的用户名和密码</h3>");
          }
    }else{
        res.end("请确认地址是否正确");
    }
});
server.listen(4000, 'localhost');