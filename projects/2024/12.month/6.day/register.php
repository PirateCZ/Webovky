<?php
include "datab.php";

$error="";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username=mysqli_real_escape_string($conn, $_POST['username']);
    $email=mysqli_real_escape_string($conn, $_POST['email']);
    $password=mysqli_real_escape_string($conn, $_POST['password']);
    $confirm_password=mysqli_real_escape_string($conn, $_POST['confirm_password']);

    if($password !==$confirm_password){
        echo"heslo se neshoduje";
    }else{
        $sql="SELECT *FROM users WHERE name='$username' LIMIT 1";
        $result=mysqli_query($conn, $sql);
    
        if(mysqli_num_rows($result) ===1){
            $error="Uživatel již existuje, napište prosím jiné jméno";
        }   else{
            $passwordHash=password_hash($password,PASSWORD_DEFAULT);
            $sql="INSERT INTO users(name, email, password) VALUES('$username','$email','$passwordHash')";
        }
    
    
        if(mysqli_query($conn,$sql)){
            echo"data vložena";
        }else{
            $error="Něco se stalo, nenahrálo se, chyba:" . mysqli_error($conn);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="">
    <label for="username">Username</label>
    <input id="username" type="text" name="username" required><br><br>
    
    <label for="email">Email</label>
    <input id="email" type="text" name="email" required><br><br>
    
    <label for="password">Password</label>
    <input id="password" type="text" name="password" required><br><br>
    
    <label for="confirm_password">Confirm Password</label>
    <input id="confirm_password" type="text" name="confirm_password" required><br><br>
    
    <input type="submit" value="Registrace">
    </form>
</body>
</html>