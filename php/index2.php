<?php
  include("public.php");
  $db=getConnect();
  $sql = "select * from goods2";
  $dbValue = mysqli_query($db, $sql);
  $temp=array();
    while($res=mysqli_fetch_assoc($dbValue)) {
    $temp[]=$res;
}    
  echo json_encode($temp);
?>