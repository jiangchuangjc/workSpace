	function teacher(name){
   this.name = name;
  }
	teacher.prototype.sayName = function(){
  	    console.log("name is "+this.name);
  	}
  	var teacher1 = new teacher("xiaoming");
  	teacher1.sayName();
  	 
  	function student(name){
  	    this.name = name;
  	}
  	student.prototype = new teacher()
  	var student1 = new student("xiaolan");
  	student1.sayName();
  	//  name is xiaoming
  	//  name is xiaolan
  