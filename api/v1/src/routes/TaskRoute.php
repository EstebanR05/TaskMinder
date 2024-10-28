<?php

include_once __DIR__ . '/../controller/TaskController.php';

$taskController = new TaskController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
        echo json_encode($taskController->getById($_GET['id']));
    }else{
        echo json_encode($taskController->getAll());
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $taskController->create($data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'];
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $taskController->update($id, $data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    echo json_encode(['success' => $taskController->delete($id)]);
}