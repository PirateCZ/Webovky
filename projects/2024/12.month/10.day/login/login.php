<?php
    session_start();
    include("../database.php");
    include("login.html");

    //login and ready up a session
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST["return"])){
            header("Location: ../index/index.php");
        }
        elseif(!empty($_POST["username"] && !empty($_POST["password"]))){
            $sql = "SELECT * FROM users";
            $result = mysqli_query($connect, $sql);
            if(mysqli_num_rows($result) > 0){
                while($row = mysqli_fetch_assoc($result)){
                    if($_POST["username"] == $row["username"]){
                        if(password_verify($_POST["password"] , $row["password"])){
                            $_SESSION["username"] = $_POST["username"];
                            header("Location: ../home/home.php");
                        }
                    }
                }
            }
        
        }
    }


    mysqli_close($connect);
?>