<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name    = htmlspecialchars(trim($_POST['name']    ?? ''));
    $email   = htmlspecialchars(trim($_POST['email']   ?? ''));
    $phone   = htmlspecialchars(trim($_POST['phone']   ?? ''));
    $service = htmlspecialchars(trim($_POST['service'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        echo "<p style='color:red;'>Please fill all required fields.</p>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p style='color:red;'>Please enter a valid email.</p>";
        exit;
    }

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <title>Thank You – VORA Studio</title>
      <link rel='stylesheet' href='../css/style.css'>
    </head>
    <body>
      <header id='navbar'>
        <div class='logo'>VORA</div>
        <nav>
          <a href='../index.html'>Home</a>
          <a href='../portfolio.html'>Portfolio</a>
          <a href='../services.html'>Services</a>
          <a href='../contact.html'>Contact</a>
        </nav>
      </header>
      <section class='page-hero'>
        <h1>Thank You, $name!</h1>
        <p>Your enquiry has been received. We will reply to <strong>$email</strong> within 24 hours.</p>
      </section>
      <section class='section' style='text-align:center;'>
        <p style='margin-bottom:24px; color:#555;'>
          Interested service: <strong>$service</strong><br>
          We look forward to working with you.
        </p>
        <a href='../index.html' class='btn'>Back to Home</a>
      </section>
      <footer>
        <div class='footer-cols'>
          <div><h4>VORA Studio</h4><p>New Delhi, India</p></div>
        </div>
        <p class='footer-bottom'>&copy; 2025 VORA Studio.</p>
      </footer>
    </body>
    </html>";

} else {
    header('Location: ../contact.html');
    exit;
}
?>
