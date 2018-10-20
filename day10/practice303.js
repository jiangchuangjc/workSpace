function Stu(id,name,age,hobby){
    this.id=id;
    this.name=name;
    this.age=age;
    this.hobby=hobby;
}
Stu.prototype={
   info:function(){
       console.log("我的学号是"+this.id+",我的名字是:"+this.name+",我的年龄是:"+this.age);
   },
   hobbys:function(){
       console.log("我的爱好是:"+this.hobby);
   }
}
module.exports = Stu;