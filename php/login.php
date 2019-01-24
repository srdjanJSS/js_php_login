<?php
session_start();
require 'connection.php';
$username = $_POST['username'];
$password = $_POST['password'];
$sql = $pdo->prepare("select id from quiz_users where username='$username' AND password='$password'");
$sql->execute();
$result = $sql->fetch()['id'];
if($result){
  $_SESSION['id'] = $result;
}
 ?>
