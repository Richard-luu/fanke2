<?php
  include("public.php");
  $db=getConnect();
  $sql = "select imagesSrc from goods1 group by imagesSrc";
  //select imagesSrc from goods1
  $dbValue = mysqli_query($db, $sql);
//   $result = mysqli_fetch_array($dbValue);
// 要用循环才能读取
  $temp=array();
    while($res=mysqli_fetch_assoc($dbValue)) {
    $temp[]=$res['imagesSrc'];
}    

//   print_r($temp);
  echo json_encode($temp)
//   if($result){
//     // print_r($result);
//     // echo json_encode($result);
//     // print_r(array_values($result));
//     echo  $result['imagesSrc'];

?>