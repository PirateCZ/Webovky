<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $usernameErr = $passwordErr = $emailErr = "";
    $username = $password = $email = "";
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if(empty($_POST["username"])) {
            $usernameErr = "*jmeno je vyzadovano";
        } else {
            $username = test_input($_POST["username"]);
        }
        if(empty($_POST["password"])) {
            $passwordErr = "*heslo je vyzadovano";
        } else {
            $password = test_input($_POST["password"]);
        }
        if(empty($_POST["email"])) {
            $emailErr = "*email je vyzadovan";
        } else {
            $email = test_input($_POST["email"]);
        }
    }
    ?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Jmeno: <input type="text" name="username">
        <span class="error"> <?php echo $usernameErr;?></span>
        <br><br>
        Heslo: <input type="password" name="password">
        <span class="error"> <?php echo $passwordErr;?></span>
        <br><br>
        Email: <input type="text" name="email">
        <span class="error"> <?php echo $emailErr;?></span>
        <br><br>
        <input type="submit" name="submit" value="Submit">
</body>
</html>