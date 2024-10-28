<?php

require_once __DIR__ . '/../config/Database.php';

class TaskService
{
    private $conn;
    private $table_name = "tasks";

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
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findOne($id): array
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE Id_task = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function save($data, $id = null): bool
    {
        ($id != null) ? 
        $query = "UPDATE " . $this->table_name . 
        " set Name_task = :name,
        set Description_task = :description, 
        set created_at_task = :createAt, 
        set Limit_task = :limit, 
        set Id_state_task = :stateId, 
        set Id_priority_task = :priorityId, 
        set Id_user_creator_task = :creatorId, 
        set Id_user_responsable_task = :responsableId where Id_task = :id" 
        : 
        $query = "INSERT INTO " . $this->table_name . 
        " (Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
        VALUES (null, :name, :description, :createAt, :limit, :stateId, :priorityId, :creatorId, :responsableId)";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $data['name']);
        $stmt->bindParam(":description", $data['description']);
        $stmt->bindParam(":createAt", $data['createAt']);
        $stmt->bindParam(":limit", $data['limit']);
        $stmt->bindParam(":stateId", $data['stateId']);
        $stmt->bindParam(":priorityId", $data['priorityId']);
        $stmt->bindParam(":creatorId", $data['creatorId']);
        $stmt->bindParam(":responsableId", $data['responsableId']);

        if($id != null) $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    public function remove($id): bool
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE Id_task = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }
}
