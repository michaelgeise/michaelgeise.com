<?php
  $to = 'michaelbgeise@gmail.com' . "\r\n";
  $subject = 'Contact form | michaelgeise.com';
  $name = $_POST['name'];
  $email = $_POST['email']; 
  $message = "Name: " . $name . "\r\n" .
             "E-mail: " . $email . "\r\n" .
             "Message: " . $_POST["message"] . "\r\n"; 
  $headers = "From: " . $name . "<" . $email . "> \r\n" .
             "Reply-To: " . $email . "\r\n" .
             "MIME-Version: 1.0" . "\r\n" .
             "Content-type:text/html;charset=UTF-8" . "\r\n";
  mail($to, $subject, $message, $headers); 

 ?>