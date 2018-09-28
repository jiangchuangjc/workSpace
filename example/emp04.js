function teacher(name,age){
  this.name = name;
  this.age = age;
  this.sayhi = function(){
  console.log('name:'+name+", age:"+age);
  }
  }
  function student(){
  var args = arguments;
  this.sex = "M";
  teacher.call(this,args[0],args[1]);
  // teacher.apply(this,arguments);
  }
  var teacher1 = new teacher('xiaoming',23);
  teacher1.sayhi();
  
  var student1 = new student('xiaolan',12);
  console.log(student1);
  student1.sayhi();
  
  // alert: name:xiaoming, age:23
  // alert: name:xiaolan, age:12
  