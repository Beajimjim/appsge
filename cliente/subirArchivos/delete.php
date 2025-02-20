<?php
$data = json_decode(file_get_contents("php://input"), true);
$fileName = $data["fileName"];

$uploadDir = "uploads/";
$filePath = $uploadDir . $fileName;

if (file_exists($filePath)) {
    unlink($filePath);
    echo "Archivo eliminado: " . $fileName;
} else {
    echo "No se encontró el archivo.";
}
?>
