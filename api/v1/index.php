<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Obtener la ruta
$request = $_SERVER['REQUEST_URI'];

// Rutas para usuarios (users)
if (strpos($request, '/api/v1/users') !== false) {
    include_once './src/routes/UserRoute.php';
}
