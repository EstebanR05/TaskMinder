<?php

include_once __DIR__ . '/../controller/StatesController.php';

$statesController = new StatesController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
        echo json_encode($statesController->getById($_GET['id']));
    }else{
        echo json_encode($statesController->getAll());
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $statesController->create($data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'];
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $statesController->update($id, $data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    echo json_encode(['success' => $statesController->delete($id)]);
}