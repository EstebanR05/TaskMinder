<?php

include_once __DIR__ . '/../controller/RolController.php';

$rolController = new RolController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
        echo json_encode($rolController->getByIdRols($_GET['id']));
    }else{
        echo json_encode($rolController->getAllRols());
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $rolController->createRol($data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'];
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $rolController->updateRol($id, $data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    echo json_encode(['success' => $rolController->deleteRol($id)]);
}