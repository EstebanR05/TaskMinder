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

    public function getById($id): array
    {
        try {
            return $this->taskService->findOne($id)[0];
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
