<?php
header("Access-Control-Allow-Origin:*");
require_once 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $sqlMessages =
    "SELECT * FROM `usuarios`
     JOIN `mensagens`
     ON usuarios.id_usuario = mensagens.id_usuario
    ";
  $resultMessages = consultDB($sqlMessages);
  $messages = [];

  while($rowMessages = mysqli_fetch_assoc($resultMessages)) {
    $messages[] = $rowMessages;
  }

  echo json_encode($messages);

} 

else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $msg = $_POST['msg'];

  $sql =
    "INSERT INTO usuarios 
     VALUES (
        NULL, '$nome', '$email'
     );

     INSERT INTO mensagens (id_usuario, msg) 
     VALUES (
        LAST_INSERT_ID(), '$msg'
     );
    ";

  insertDB($sql);

  echo json_encode($msgs);
} 
