function User(id,name){
   this.id = id;
   this.name = name;
}

User.prototype = {
    info:function(){
        console.log("我的编号是:"+this.id+",姓名是:"+this.name);
    },
    sayHi:function(){
        console.log(this.name+"很帅");
    }
}

module.exports = User;