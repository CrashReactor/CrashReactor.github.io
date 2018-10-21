<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
	<title>Тест</title>
</head>
<body>
	<h1>Ваши данные отправлены к нам на почту!</h1>
	<?php 

		$person_name  = $_POST["name"];
		$phone_number = $_POST["phone"];
		$to           = "kfboot@yandex.ru";
		$subject 		  = "Тестовое письмо";

    $headers      = "MIME-Version: 1.0\r\n";
    $headers     .= "Content-type: text/plain; charset=UTF-8\r\n";

    $message      = "Имя: " . $person_name . "<br> Номер телефона: " . $phone_number;

    mail($to, $subject, $message, $headers);
    echo $message;
	?>
</body>
</html>
