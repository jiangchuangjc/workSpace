var fs = require("fs");
var allFiles = [];
var allDirs = [];
fs.readdir("./a",function(err,files){
    if(err){
        console.log(err);
    }else{
      (function a(i){
          if(i==files.length){
              console.log("文件有:");
              for(var j=0;j<allFiles.length;j++){
                  console.log(allFiles[j]);
              }
              console.log("文件夹有:");
              for(var j=0;j<allFiles.length;j++){
                console.log(allDirs[j]);
              }
              return;
          }
            fs.stat("./a/"+files[i],function(err,stats){
                if(err){
                    console.log(err);
                }else{
                    if(stats.isFile()){
                        // console.log(files[i]+"是文件");
                        allFiles.push(files[i]);
                    }else if(stats.isDirectory()){
                        // console.log(files[i]+"是文件夹");
                        allDirs.push(files[i]);
                    }
                }
              a(++i);
            })
        })(0)
    }
})
