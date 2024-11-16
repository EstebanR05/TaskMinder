<?php

include_once __DIR__ . '/../services/TaskService.php';

class TaskController
{
    private $taskService;

    public function __construct()
    {
        $this->taskService = new TaskService();
    }

    public function getAll(): array
    {
        try {
            return $this->taskService->findAll();
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function getAllTaskDone(): array
    {
        try {
            return $this->taskService->findAllDone();
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    } 

    public function getById($id): array
    {
        try {
            return $this->taskService->findOne($id)[0];
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function getStateByIdTask($id): array
    {
        try {
            return $this->taskService->findAllStates($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function create($data): void
    {
        try {
            $this->taskService->save($data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function cancelTaskDone($id): void
    {
        try {
            $this->taskService->cancelTaskDone( $id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function changeAssingUser($id, $idUser): void
    {
        try {
            $this->taskService->changeAssingUser( $id, $idUser);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function changeStatusTask($id, $idStatus): void
    {
        try {
            $this->taskService->changeStatusTask( $id, $idStatus);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function changePrioritiesTask($id, $idPriority): void
    {
        try {
            $this->taskService->changePrioritiesTask( $id, $idPriority);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function update($id, $data): void
    {
        try {
            $this->taskService->save($data, $id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function delete($id): void
    {
        try {
            $this->taskService->remove($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }
}
