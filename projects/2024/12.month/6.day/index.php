<?php
    require('database.php');
    require('index.html');

    $error = '';

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $username = mysqli_real_escape_string($conn, $_POST["name"]);
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]);
        $confirm_password = mysqli_real_escape_string($conn, $_POST["confirm-password"]);

        if($password != $confirm_password){
            echo "heslo neschoduje se";
            
        } else {
            $sql = "SELECT * FROM users WHERE name='$username' LIMIT 1";
            $result = mysqli_query($conn, $sql);

            if(mysqli_num_rows($result) === 1){
                $error = "uzivatel existuje";
            }
            
            $sql = "INSERT INTO users(name, password, email) VALUES ('$username', '$email', '$password')";

            if(mysqli_query($conn, $sql)){
                echo "registrace uspesna";
            }
        }
    }
    echo $error;
?>