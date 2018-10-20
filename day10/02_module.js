//引用a.js文件
var a = require("./a.js");
console.log("module中调用a.js的属性:"+a.aa);
console.log("module中调用a.js的方法:");
a.bb();
