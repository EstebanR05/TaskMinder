<?php

require_once __DIR__ . '/../config/Database.php';

class PriorityService
{
    private $conn;
    private $table_name = "	priority";

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function findAll(): array
    {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $data =  $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $this->mapperPriorities($data);
    }

    public function findOne($id): array
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE Id_priority = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        $data =  $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $this->mapperPriorities($data);
    }

    public function save($data, $id = null): bool
    {
        ($id != null) ?
            $query = "UPDATE " . $this->table_name . " set Name_priority = :name where Id_priority = :id"
            :
            $query = "INSERT INTO " . $this->table_name . " (Id_priority, Name_priority) VALUES (null, :name)";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $data['name']);
        if ($id != null) $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    public function remove($id): bool
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE Id_priority = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    private function mapperPriorities($priorities): array
    {
        return array_map(function ($priority) {
            return [
                'id' => $priority['Id_priority'],
                'name' => $priority['Name_priority']
            ];
        }, $priorities);
    }
}
