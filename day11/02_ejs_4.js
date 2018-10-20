var ejs = require("ejs");

var str = "我的名字是<%= name %>";

var data = {name:"jiangchuang"};

var html = ejs.render(str,data);

console.log(html);