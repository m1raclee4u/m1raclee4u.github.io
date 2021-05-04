<?php

$name = $_POST['email'];
$phone = $_POST['name'];
$email = $_POST['number'];
$msg = $_POST['text'];
$token = "1779462460:AAGFZ0BDRtLbvtZG2GIb-IhCzt4odSiSdVU";
$chat_id = "-527575119";
$arr = array(
  'Email: ' => $email,
  'Имя пользователя: ' => $name,
  'Телефон' => $number,
  'Сообщение:' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>