<?php
    session_start();
    include("../database.php");
    include("signup.html");

    //creates a user
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["return"])){
            header("Location: ../index/index.php");
        }
        elseif(!empty($_POST["username"] && !empty($_POST["password"]))){
            $username = $_POST["username"];
            $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

            $_SESSION["username"] = $username;
            
            $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

           try{
            mysqli_query($connect, $sql);
            echo "You signed up";
           }
           catch(mysqli_sql_exception){echo "error importing data";}
           header("Location: ../login/login.php");
        }
    }


    mysqli_close($connect);
?>