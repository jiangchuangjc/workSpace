var fs = require('fs');

//创建目录

fs.mkdir('./b',function(err){
  if(err){
    console.log("创建失败,失败运行:");
    console.log(err);
  }else{
    console.log("创建成功");
  }
})