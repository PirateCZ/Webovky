<?php
    $dbServer = "localhost";
    $dbUser = "root";
    $dbPass = "";
    $dbName = "fakechat";
    $connect = null;

    try{
        $connect = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
    }catch(mysqli_sql_exception){echo "something broke";}
?>