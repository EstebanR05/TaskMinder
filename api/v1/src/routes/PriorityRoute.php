<?php

include_once __DIR__ . '/../controller/PriorityController.php';

$priorityController = new PriorityController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
        echo json_encode($priorityController->getById($_GET['id']));
    }else{
        echo json_encode($priorityController->getAll());
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $priorityController->create($data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'];
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $priorityController->update($id, $data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    echo json_encode(['success' => $priorityController->delete($id)]);
}