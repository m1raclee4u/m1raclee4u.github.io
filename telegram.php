<?php

$email = $_POST['email'];
$name = $_POST['name'];
$number = $_POST['number'];
$text = $_POST['text'];
$token = "1779462460:AAGFZ0BDRtLbvtZG2GIb-IhCzt4odSiSdVU";
$chat_id = "-527575119";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон:' => $number,
  'Email: ' => $email,  
  'Сообщение:' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
if ($sendToTelegram) {
    header('Location: index.html');
    }


?>