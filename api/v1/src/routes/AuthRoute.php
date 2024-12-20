<?php

include_once __DIR__ . '/../controller/AuthController.php';

$authController = new AuthController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $email = isset($_GET['email']) ? $_GET['email'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    
    if ($email && $password) {
        echo json_encode($authController->login(['email' => $email, 'password' => $password]));
    } else {
        echo json_encode(["error" => "Datos de entrada incompletos"]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $authController->register($data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'];
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $authController->changePassword($id, $data)]);
}
