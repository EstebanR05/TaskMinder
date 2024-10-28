<?php

include_once __DIR__ . '/../services/StateService.php';

class StatesController
{
    private $stateService;

    public function __construct()
    {
        $this->stateService = new StateService();
    }

    public function getAll(): array
    {
        try {
            return $this->stateService->findAll();
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function getById($id): array
    {
        try {
            return $this->stateService->findOne($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function create($data): void
    {
        try {
            $this->stateService->save($data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function update($id, $data): void
    {
        try {
            $this->stateService->save($data, $id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function delete($id): void
    {
        try {
            $this->stateService->remove($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }
}
