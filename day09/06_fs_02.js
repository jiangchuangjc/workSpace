var fs = require("fs");

var start = new Date();

var result = fs.readFileSync("./day09.txt")
console.log(result.toString());

var end = new Date();

console.log("程序执行了"+(end-start)+"ms");