var count=10;   //全局作用域 标记为flag1
function add(){
    var count=0;    //函数全局作用域 标记为flag2
    return function(){
        count+=1;   //函数的内部作用域
        console.log(count);
    }
}
var s = add()
s();//输出1   //1
s();//输出2   //2
