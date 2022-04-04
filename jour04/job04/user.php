<?php
$bdd = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$requet = $bdd->prepare('SELECT * FROM utilisateurs');
$requet->execute();
$infoUser = $requet->fetchall(PDO::FETCH_ASSOC);
$json = json_encode($infoUser);
echo $json;
// On transforme en json la base de données
?>
