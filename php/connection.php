<?php
try {
  $pdo = new PDO('mysql:host=localhost;dbname=danilovadb','root','');
} catch (PDOException $e) {
  echo $e->getMessage();
}


 ?>
