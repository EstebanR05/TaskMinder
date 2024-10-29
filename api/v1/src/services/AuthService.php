<?php

require_once __DIR__ . '/../config/Database.php';
include_once __DIR__ . '/../services/UserService.php';

class AuthService
{
    private $conn;
    private $table_name = "Users";
    private $userService;

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->getConnection();
        $this->userService = new UserService();
    }

    public function validatedUser($data): array
    {
        $user = $this->userService->getUserByEmail($data["email"]);

        if ($user == null || $user[0]['Password_user'] != $data["password"]) {
            throw new Exception("Error, usuario o contraseña incorrectos!", 1);
        }

        return $user;
    }

    public function register($data): bool
    {
       return $this->userService->createUser($data);
    }

    public function changePassword($id, $data): bool
    {
        $user = $this->userService->getByIdUser($id);

        if ($user[0] == null || $user[0]['Password_user'] != $data["password"]) {
            throw new Exception("Error, no se coincide con los datos!", 1);
        }
        
        $query = "UPDATE " . $this->table_name . " SET Password_user = :newPassword WHERE Id_user = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam('newPassword', $data['newPassword']);
        $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }
}
