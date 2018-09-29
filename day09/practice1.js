var fs = require('fs');
var arr1 =[];
var arr2 =[];
fs.readdir("./a",function(err,files){
  if(err){
    console.log(err);
  }else{
    // console.log(files); //数组
    //异步导致出问题  
    (function a(i){
      if(i==files.length){
        console.log("文件有:");
        for(var i=0;i<arr1.length;i++){
          console.log(arr1[i]);
        }
        console.log("文件夹有:");
        for(var i=0;i<arr2.length;i++){
          console.log(arr2[i]);
        }
        return;
      }
      fs.stat("./a/"+files[i],function(err,stats){
        if(err){
          console.log(err);
          return;
        }else{
          if(stats.isFile()){
            // console.log(files[i]+"是文件");
            arr1.push(files[i]);
          }else if(stats.isDirectory()){
            // console.log(files[i]+"是文件夹");
            arr2.push(files[i])
          }
        }
        a(++i);
      })
      
  })(0)
  
  }
})

  // (function a(i){
  //   //先判断递归结束的条件
  //   if(i==10){
  //     console.log("递归结束")
  //     return;
  //   }
  //   //打印i并自增1
  //   console.log(++i);
  //   //自调
  //   a(i);
  // })(0)