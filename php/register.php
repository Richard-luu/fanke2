<?php
  include("public.php");
  $db=getConnect();
  $userName = $_POST["userName"];
  $pwd = $_POST["password"];
  $sql = "insert into user (userName,password) values ('$userName','$pwd')" ;
  $result = mysqli_query($db, $sql);
  if($result){
    echo 1;//注册成功
  }
 else{
     echo 0;//注册失败
 }

?>