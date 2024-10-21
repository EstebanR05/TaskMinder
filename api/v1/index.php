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

// Rutas para roles (rols)
if (strpos($request, '/api/v1/rols') !== false) {
    include_once './src/routes/RolesRoute.php';
}

// Rutas para estados (states)
if (strpos($request, '/api/v1/states') !== false) {
    include_once './src/routes/StatesRoute.php';
}

// Rutas para prioridades (priority)
if (strpos($request, '/api/v1/priority') !== false) {
    include_once './src/routes/PriorityRoute.php';
}

// Rutas para usuarios (tasks)
if (strpos($request, '/api/v1/tasks') !== false) {
    include_once './src/routes/TaskRoute.php';
}

