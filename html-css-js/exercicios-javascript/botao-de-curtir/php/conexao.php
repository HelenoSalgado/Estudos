<?php 
/* 
Embora 'database' e 'dbbase' acessasse o banco de dados para buscar dados, não conseguia encontrar a tabela para insertar informações. dbname foi a solução. 
*/

 $PDO = new PDO("mysql:host=localhost;dbname=posts","user","password");
 $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?> 