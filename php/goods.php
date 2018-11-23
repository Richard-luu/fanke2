<?php
  include("public.php");
  $db = getConnect();
  $gid = $_GET['gid'];
  $gidVal = $_GET['gidVal'];
  $gidMun = $_GET['gidMun'];
  $sql = "select * from $gid where $gidMun=$gidVal";
  $dbValue = mysqli_query($db, $sql);
  $temp=array();
    while($res=mysqli_fetch_assoc($dbValue)) {
        $temp[]=$res;
    }    
  echo json_encode($temp);
?>