


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="login.php" method="POST">
        <input type="text" placeholder="username" name="username">
        <input type="password" placeholder="password" name="password">
        <input type="submit" value="Login">
    </form>
</body>
</html>

<?php
    session_start();
    $message = "";
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $username = "ales1";
        $password = "123";

        $input_username = $_POST["username"];
        $input_password = $_POST["password"];
        
        if($username == $input_username && $password == $input_password){
            $_SESSION["loggedin"] = true;
            $_SESSION["username"] = $input_username;

            header("location: admin.php");
            exit;
        }   
        else{
            $message = "wrong username or password";
        }
    }
?>