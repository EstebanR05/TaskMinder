<?php

include_once __DIR__ . '/../services/RolService.php';
class RolController
{
    private $rolServive;

    public function __construct() {
        $this->rolServive = new RolService();
    }
    
    public function getAllRols(): array
    {
        try {
            return $this->rolServive->finAllRols();
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function getByIdRols($id): array
    {
        try {
            return $this->rolServive->findOneRols($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function createRol($data): void
    {
        try {
            $this->rolServive->CreateRols($data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function updateRol($id, $data): void
    {
        try {
            $this->rolServive->UpdateRols($id, $data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function deleteRol($id): void
    {
        try {
            $this->rolServive->DeleteRols($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }
}

