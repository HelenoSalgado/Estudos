<?php
require_once 'conexao.php';
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

try {
  $queryLikes = $PDO->query('SELECT * FROM 3932935_postagens.ncurtidas');
  $currentlikes = $queryLikes->fetch(PDO::FETCH_ASSOC);
  $newLikes = $currentlikes['curtidas'] + 1;

  $updateLikes = $PDO->prepare("UPDATE ncurtidas SET curtidas = $newLikes WHERE id = 0");
  $updateLikes->execute();

  header('Content-type: application/json');
  echo json_encode(array(
    'curtidas' => $newLikes
  ), true);
} catch (PDOException $e) {
  echo $e->getMessage();
}