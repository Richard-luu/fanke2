<?php
  include("public.php");
  $db=getConnect();
  $userName = $_GET["userName"];
  $sql = "select userName from user where userName = '$userName'" ;
  $dbValue = mysqli_query($db, $sql);
  $result = mysqli_fetch_array($dbValue);
  if($result){
    //   echo $result[0];//用户名已存在
    echo 1;
  }
 else{
     echo 0;//用户名不存在
 }

?>