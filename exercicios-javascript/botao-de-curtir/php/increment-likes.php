<?php
/* 
-- A conversão de array para string é necessária caso exista mais de um objeto.
  
$newLikes = implode(json_decode(file_get_contents('php://input'), true));
  
-- htmlspecialchars na frente da variável global $_POST fez com que aparecesse uma string vazia ao invés de NULO.
  
$newLikes = htmlspecialchars($_POST["data"]);
*/

require_once 'conexao.php';

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

try {
  $queryLikes = $PDO->query('SELECT * FROM 3932935_postagens.ncurtidas');
  $currentlikes = $queryLikes->fetch(PDO::FETCH_ASSOC);
  $newLikes = json_decode(file_get_contents('php://input'), true);
  
 
  $updateLikes = $PDO->prepare("UPDATE ncurtidas SET curtidas = '$newLikes' WHERE id = 1");
  
  $updateLikes->execute();

  header('Content-type: application/json');
    json_encode(array(
    'data' => $newLikes
  ), true);
 } catch (PDOException $e) {
  echo $e->getMessage();
}
?>