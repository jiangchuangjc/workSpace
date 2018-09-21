var game={
  data:null,
  RN:4,
  CN:4,
  start(){
    //启动游戏
    this.data=[];
    for(var r=0;r<this.RN;r++){//遍历行
      this.data[r]=[];
      for(var c=0;c<this.CN;c++){
        this.data[r][c] = 0;
      }
    }
    this.randomnum();
    this.randomnum();
    this.updateView();
    console.log(this.data.join("\n"));
    
  },
  randomnum:function(){
     while(true){
        var r=Math.floor(Math.random()*this.RN);
        var c=Math.floor(Math.random()*this.CN);
       if(this.data[r][c]==0){
         this.data[r][c]=Math.random()<0.5?2:4;
         break;
       }
     }
  },
  updateView:function(){
		//将data中的每个元素值更新到页面对应的div上
		for(var r=0;r<this.RN;r++){//遍历data
			for(var c=0;c<this.CN;c++){
				//找到和r行c列位置对应的div
				var div=document.getElementById("c"+r+c);
				//如果data中当前元素的值不等于0
				if(this.data[r][c]!==0){
					//设置div的内容为data中当前元素的值
					div.innerHTML=this.data[r][c];
					//设置div的class为"cell n"+当前元素值
					div.className="cell n"+this.data[r][c];
				}else{//否则
					div.innerHTML="0";//清除div的内容
					//设置div的class为"cell"
					div.className="cell";
				}
			}
		}
}
}
game.start();
