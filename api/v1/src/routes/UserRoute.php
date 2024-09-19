<?php

include_once __DIR__ . '/../controller/UserController.php';

$userController = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($userController->getUsers());
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $userController->createUser($data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'];
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $userController->updateUser($id, $data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    echo json_encode(['success' => $userController->deleteUser($id)]);
}

?>