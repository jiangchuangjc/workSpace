<?php
  $stu = file_get_contents("./student.json");
  $json_array = json_decode($stu,true);
  $msg = $_GET["msg"];  //接收的参数1,2,3,4
	$arr = array();//空数组,保存符合条件的数据
			for($i=0;$i<count($json_array);$i++){
         if($msg == $json_array[$i]["sex"]){
					// array_push($arr,$stu[$i]);
					$arr[] = $json_array[$i];
				}
      }
      echo json_encode($arr);
?>