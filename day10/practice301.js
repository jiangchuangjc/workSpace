var name = "jiangchuang";
var password = "123456";
function info(){
    console.log("我的名字是"+name);
    console.log("我的支付宝密码是:"+password);
}
exports.uname = name;
exports.upass = password;
exports.info = info;
