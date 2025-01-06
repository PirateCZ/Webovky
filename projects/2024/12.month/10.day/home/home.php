<?php
    session_start();
    include("../database.php");
    include("./home.html");

    //home and destroy session after log out
    echo "You are logged in as " . $_SESSION["username"];

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        session_destroy();
        header("Location: ../index/index.php");
    }
?>