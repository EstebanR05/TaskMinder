<?php

include_once __DIR__ . '/../services/UserService.php';

class UserController
{
    private $userService;

    public function __construct()
    {
        $this->userService = new UserService();
    }

    public function login(): void{

    }

    public function changePassword(): void{

    }

    public function getAllUsers(): array
    {
        try {
            return $this->userService->getUsers();
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function registerUser($data): void
    {
        try {
            $this->userService->createUser($data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function updateInfoUser($id, $data): void
    {
        try {
            $this->userService->updateUser($id, $data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 2);
        }
    }

    public function deleteUser($id): void
    {
        try {
            $this->userService->deleteUser($id);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }
}
