<?php
header("Content-Type: application/json");

// Lista de mensajes aleatorios
$mensajes = [
    "Nueva actualización disponible.",
    "Un usuario ha iniciado sesión.",
    "Se ha detectado un posible error en el sistema.",
    "Alguien ha enviado un mensaje.",
    "Tu cuenta ha sido actualizada.",
    "Mantenimiento programado en 1 hora.",
    "Nuevo documento agregado.",
    "Se ha detectado actividad sospechosa.",
    "Recordatorio: Cambio de contraseña recomendado."
];

// Tipos de notificación
$tipos = ["info", "alerta", "error"];

// Generar una notificación aleatoria
$notificacionAleatoria = [
    "id" => rand(1000, 9999), // ID aleatorio
    "mensaje" => $mensajes[array_rand($mensajes)], // Mensaje aleatorio
    "tipo" => $tipos[array_rand($tipos)] // Tipo aleatorio
];

// Devolver la notificación en JSON
echo json_encode([$notificacionAleatoria]);
?>
