function Route(req,res){
    this.req = req;
    this.res = res;
}
Route.prototype = {
    showIndex:function(){
        this.res.write(this.req.url);
        this.res.end("<h3 style='color:green'>这是首页</h3>");
    },
    showInfo:function(){
        this.res.write(this.req.url);
        this.res.end("<h3 style='color:skyblue'>这是信息页</h3>");
    },
    showError:function(){
        this.res.write(this.req.url);
        this.res.end("<h3 style='color:red'>这是错误页面</h3>");
    }
}

module.exports = Route;