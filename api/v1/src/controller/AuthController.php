<?php


include_once __DIR__ . '/../services/AuthService.php';

class AuthController
{

    private $authService;

    public function __construct()
    {
        $this->authService = new AuthService();
    }

    public function login($data): array
    {
        try {
            return $this->authService->validatedUser($data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function register($data): bool
    {
        try {
            return $this->authService->register($data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }

    public function changePassword($id, $data): bool
    {
        try {
            return $this->authService->changePassword($id, $data);
        } catch (\Throwable $th) {
            throw new Exception("Error Processing Request: " . $th, 1);
        }
    }
}
