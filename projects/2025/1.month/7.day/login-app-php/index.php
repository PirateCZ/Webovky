<?php
// Include the header and navigation partials
include "partials/header.php";
include "partials/navigation.php";
?>

<!-- Main container -->
<div class="container">

    <!-- Hero section -->
    <div class="hero">
        <div class="hero-content">
            <h1>Welcome to our PHP App</h1>
            <p>Securely login and manage your account with us</p>

            <!-- Display buttons for login and registration if the user is not logged in -->
            <div class="hero-buttons">
                <?php if (!is_user_logged_in()): ?>
                    <a class="btn" href="login.php">Login</a>
                    <a class="btn" href="register.php">Register</a>
                <?php endif; ?>
            </div>
        </div>
    </div>

</div>

<!-- Include the footer partial -->
<?php include "partials/footer.php"; ?>