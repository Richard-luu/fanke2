<?php
  include("public.php");
  $db=getConnect();
  $userName = $_POST["userName"];
  $pwd = $_POST["password"];
  $sql = "select uid,userName,password from user where userName = '$userName' and password = '$pwd'" ;
  // echo $sql;
  $dbValue = mysqli_query($db, $sql);
  $result = mysqli_fetch_array($dbValue);
  if($result){
    //   echo $result[0];//登陆成功
    echo 1;
  }
 else{
     echo 0;//失败;
 }

?>