<?php

require_once __DIR__ . '/../config/Database.php';

class RolService
{
    private $conn;
    private $table_name = "rols";

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function finAllRols(): array
    {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findOneRols($id): array
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE Id_rol = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function CreateRols($data): bool
    {
        $query = "INSERT INTO " . $this->table_name . " (Id_rol, Name_rol) VALUES (null, :name)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name",$data['name']);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    public function UpdateRols($id, $data): bool
    {
        $query = "UPDATE " . $this->table_name . " set Name_rol = :name where Id_rol = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":name",$data['name']);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    public function DeleteRols($id): bool
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE Id_rol = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }
}
