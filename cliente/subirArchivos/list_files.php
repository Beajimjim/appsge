<?php
$uploadDir = __DIR__ . "/uploads/";
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$files = array_diff(scandir($uploadDir), array('.', '..'));

header('Content-Type: application/json');
echo json_encode(array_values($files));
?>
