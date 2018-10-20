//1.引入express模块
var express = require('express');
//2.创建app应用对象
var app = express();
//3.监听端口
app.listen(4000);

//处理具体的请求
app.get("/",function(req,res){
  res.end('message from app');
});
//设置视图模板引擎
//默认引擎是jade,但是不习惯
app.set("view engine","ejs");
//展示03.ejs视图模板的内容
app.get("/show",function(req,res){
  //模拟的数据
  var data = {msg:"来自服务器的信息"};
  //将数据发送给视图
  res.render('03',data);
})