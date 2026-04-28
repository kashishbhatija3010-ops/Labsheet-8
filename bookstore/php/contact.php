<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($message)) {
        echo "<p style='color:red;'>All fields are required.</p>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p style='color:red;'>Invalid email address.</p>";
        exit;
    }

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <title>Message Sent – BookNest</title>
      <link rel='stylesheet' href='../css/style.css'>
    </head>
    <body>
      <header>
        <div class='logo'>📚 BookNest</div>
        <nav>
          <a href='../index.html'>Home</a>
          <a href='../books.html'>Books</a>
          <a href='../cart.html'>Cart</a>
          <a href='../contact.html'>Contact</a>
        </nav>
      </header>
      <section class='featured'>
        <div class='contact-box'>
          <h2 style='color:#27ae60;'>✅ Message Sent!</h2>
          <p>Thank you, <strong>$name</strong>! We will reply to <strong>$email</strong> shortly.</p>
          <br>
          <a href='../index.html' class='btn'>Back to Home</a>
        </div>
      </section>
      <footer><p>&copy; 2025 BookNest. All rights reserved.</p></footer>
    </body>
    </html>";

} else {
    header('Location: ../contact.html');
    exit;
}
?>
