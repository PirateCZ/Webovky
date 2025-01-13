<?php
include "partials/header.php";
include "partials/navigation.php";

if(is_user_logged_in()){
    header("Location: admin.php");
    exit;
}
$error = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirm_password = mysqli_real_escape_string($conn, $_POST['confirm_password']);

// Check if the password and confirm match
    if($password !== $confirm_password){
        $error =  "Password do not match";
    } else {

        // check ig username already exists
        if(user_exists($conn, $username)){
            $error = "Username already exists, Please choose another";
        } else {

            $passwordHash = password_hash($password, PASSWORD_DEFAULT);

            $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$passwordHash', '$email')";

            if(mysqli_query($conn, $sql)){
                $_SESSION['logged_in'] = true;
                $_SESSION['username'] = $username;
                redirect("admin.php");
                exit;
            }else {
                $error =  "SOMETHING HAPPENED not data inserted, error: " . mysqli_error($conn);
            };


        }

    }

}

?>

 <div class="container">
<div class="form-container">

    <form method="POST" action="">
        <h2>Create your Account</h2>

        <?php if($error): ?>
            <p style="color:red">
                <?php echo $error; ?>
            </p>
        <?php endif; ?>

        <label for="username">Username:</label>
        <input value="<?php echo isset($username) ? $username : ''; ?>"  placeholder="Enter your username" type="text" name="username" required>

        <label for="email">Email:</label>
        <input  value="<?php echo isset($email) ? $email : ''; ?>" placeholder="Enter your email"  type="email" name="email" required>

        <label for="password">Password:</label>
        <input placeholder="Enter your password"  type="password" name="password" required>

        <label for="confirm_password">Confirm Password:</label>
        <input  placeholder="Confirm your password" type="password" name="confirm_password" required>

        <input type="submit" value="Register">
    </form>
</div>
</div>


<?php include "partials/footer.php"; ?>

<?php
mysqli_close($conn);
?>