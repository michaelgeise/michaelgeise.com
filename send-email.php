<?php

// to me!
$to = "michaelbgeise@gmail.com ";

// subject
$subject = "Contact Form | HTML";
// from name
$name = $_POST['name'];
// from email
$email = $_POST['email']; 
// comment from submitee
$comment = $_POST["comment"];

// compose message
$message = "
<html>
  <head>
    <title>Contact form submission</title>
  </head>
  <body>
    <h1> New Message from $name </h1>
    <p>$comment</p>
    <p>$name</p>
    <p>$email</p>
  </body>
</html>
";

// To send HTML mail, the Content-type header must be set
$headers = "From: " . $name . "<" . $email . "> \r\n" .
           "Reply-To: " . $email . "\r\n" .
           "MIME-Version: 1.0\r\n" .
           "Content-type: text/html; charset=iso-8859-1\r\n";

// send email
mail($to, $subject, $message, $headers);
?>