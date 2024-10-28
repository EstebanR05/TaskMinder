<?php

require_once __DIR__ . '/../config/Database.php';

class UserService
{
    private $conn;
    private $table_name = "Users";

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getAllUsers(): array
    {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByIdUser($id): array
    {
        $query = "SELECT * FROM " . $this->table_name . " Where Id_user = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createUser($data): bool
    {
        $query = "INSERT INTO " . $this->table_name . " (Name_user, Email_user, Password_user, Phone_user, Address_user, Id_rol) VALUES (:name, :email, :password, :phone, :address, :idRol)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $data['name']);
        $stmt->bindParam(":email", $data['email']);
        $stmt->bindParam(":password", $data['password']);
        $stmt->bindParam(":phone", $data['phone']);
        $stmt->bindParam(':address', $data['address']);
        $stmt->bindParam('idRol', $data['idRol']);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    public function updateUser($id, $data): bool
    {
        $query = "UPDATE " . $this->table_name . " SET Name_user = :name, Email_user = :email, Phone_user = :phone, Address_user = :address, Id_rol = :idRol WHERE Id_user = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $data['name']);
        $stmt->bindParam(":email", $data['email']);
        $stmt->bindParam(":phone", $data['phone']);
        $stmt->bindParam(':address', $data['address']);
        $stmt->bindParam('idRol', $data['idRol']);
        $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    public function deleteUser($id): bool
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE Id_user = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }
}
