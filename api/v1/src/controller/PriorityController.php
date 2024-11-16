<?php

include_once __DIR__ . '/../services/PriorityService.php';

class PriorityController
{
    private $priorityService;

    public function __construct()
    {
        $this->priorityService = new PriorityService();
    }

    public function getAll(): array
    {
        try {
            return $this->priorityService->findAll();
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function getById($id): array
    {
        try {
            return $this->priorityService->findOne($id)[0];
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function create($data): void
    {
        try {
            $this->priorityService->save($data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function update($id, $data): void
    {
        try {
            $this->priorityService->save($data, $id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function delete($id): void
    {
        try {
            $this->priorityService->remove($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }
}
