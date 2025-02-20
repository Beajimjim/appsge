<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!empty($_FILES["file"]["name"])) {
    $uploadDir = "uploads/";
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $fileName = basename($_FILES["file"]["name"]);
    $filePath = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $filePath)) {
        echo "Archivo subido con éxito: " . $fileName;
    } else {
        echo "Error al subir el archivo.";
    }
} else {
    echo "No se recibió ningún archivo.";
}
?>
