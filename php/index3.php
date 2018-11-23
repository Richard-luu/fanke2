<?php
  include("public.php");
  $db=getConnect();
  $sql = "select * from goods3";
  $dbValue = mysqli_query($db, $sql);
  $temp=array();
    while($res=mysqli_fetch_assoc($dbValue)) {
    $temp[]=$res;
}    
  echo json_encode($temp);
?>