<?php
    header("content-type:text/html;charset=utf-8");
    function getConnect(){
        $db=mysqli_connect("localhost","root","","fanke");
        mysqli_query($db,"set names utf8");
        return $db;
    }
?> 