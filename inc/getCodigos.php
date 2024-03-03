<?php

require 'database.php';

$con = new Database();
$pdo = $con->conectar();

$campo = $_POST["campo"];

$sql = "SELECT nombre, descripcion FROM tbl_global_patologias WHERE nombre LIKE ? OR descripcion LIKE ? ORDER BY nombre ASC LIMIT 0, 6";
$query = $pdo->prepare($sql);
$query->execute(['%' . $campo . '%', '%' . $campo . '%']);

$html = "";

while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
	$html .= "<li class=\"list-group-item\" onclick=\"mostrar('" . $row["nombre"] . "', '" . $row["descripcion"] . "')\">" . $row["nombre"] . " - " . $row["descripcion"] . "</li>";
}

echo json_encode($html, JSON_UNESCAPED_UNICODE);
