<?php
    session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <body>
        <h1>Welcome, <?php echo $_SESSION["username"]; ?></h1>
        <a href="logout.php">Log out</a>
    </body>
</head>
