<?php

include_once __DIR__ . '/../controller/TaskController.php';

$taskController = new TaskController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (strpos($_SERVER['REQUEST_URI'], '/getAllTaskDone') !== false) {
        echo json_encode($taskController->getAllTaskDone());
    } elseif (strpos($_SERVER['REQUEST_URI'], '/getStateByIdTask') !== false) {
        echo json_encode($taskController->getStateByIdTask($_GET['id']));
    } elseif (isset($_GET['id'])) {
        echo json_encode($taskController->getById($_GET['id']));
    } else {
        echo json_encode($taskController->getAll());
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(['success' => $taskController->create($data)]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = $_GET['id'];
    $data = json_decode(file_get_contents("php://input"), true);

    if (strpos($_SERVER['REQUEST_URI'], '/cancelTaskDone') !== false) {
        echo json_encode(['success' => $taskController->cancelTaskDone($id)]);
    } elseif (strpos($_SERVER['REQUEST_URI'], '/changeAssingUser') !== false) {
        echo json_encode(['success' => $taskController->changeAssingUser($id, $data['idUser'])]);
    } elseif (strpos($_SERVER['REQUEST_URI'], '/changeStatusTask') !== false) {
        echo json_encode(['success' => $taskController->changeStatusTask($id, $data['idStatus'])]);
    } elseif (strpos($_SERVER['REQUEST_URI'], '/changePrioritiesTask') !== false) {
        echo json_encode(['success' => $taskController->changePrioritiesTask($id, $data['idPriority'])]);
    } else {
        echo json_encode(['success' => $taskController->update($id, $data)]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    echo json_encode(['success' => $taskController->delete($id)]);
}
