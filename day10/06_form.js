var http = require('http');
var fs = require('fs');
var qs = require("querystring");
var server = http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  if (req.url == '/favicon.ico') {
    return;
  }
  //localhost:4000 打开form表单页面
  if(req.url == "/"){
    fs.readFile("./06_form.html",function(err,data){
      if(err){
        console.log(err);
        res.end("data error");
        return;
      }
      res.end(data);  //将取到的数据显示到页面上
    })
  }
  if(req.url == "/submit" && req.method.toLowerCase()=="post"){
    //因为nodejs是单线程非I/O阻塞的,为了追求效率,数据是一小段一小段的上传
    //这样就会产生2种状态:正在接收,接收完成

    //提前声明一个变量,用于保存每一次得到的一小段数据
    var allData = "";

    //data:表示正在接收数据的状态
    //chunk:表示每次接收到的一小段数据
    //addListener方法与on方法功能相同。
    req.addListener("data",function(chunk){
       //拼接每次得到的小数据
       allData += chunk;
    });
    //end:表示接收完成的状态,当数据全部接收完毕,进入该状态
    req.addListener("end",function(){
       //进入接收完成状态,说明数据已经接收完毕
       var uname = qs.parse(allData).username;
       var upass = qs.parse(allData).password;
       console.log(qs.parse(allData));
       res.end("姓名为:"+uname+",密码是:"+upass); //返回响应
    })
  }
});
server.listen(4000, 'localhost');