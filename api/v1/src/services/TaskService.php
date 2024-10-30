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
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $this->mapperTasks($data);
    }

    public function findOne($id): array
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE Id_task = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $this->mapperTasks($data);
    }

    public function save($data, $id = null): bool
    {
        $query = ($id != null) ?
            "UPDATE " . $this->table_name . "
         SET Name_task = :name,
             Description_task = :description, 
             created_at_task = :createAt, 
             Limit_task = :limit, 
             Id_state_task = :stateId,
             Id_priority_task = :priorityId,
             Id_user_creator_task = :creatorId 
         WHERE Id_task = :id"
            :
            "INSERT INTO " . $this->table_name . "
         (Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
         VALUES (null, :name, :description, :createAt, :limit, :stateId, :priorityId, :creatorId, null)";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $data['name']);
        $stmt->bindParam(":description", $data['description']);
        $stmt->bindParam(":createAt", $data['createAt']);
        $stmt->bindParam(":limit", $data['limit']);
        $stmt->bindParam(":stateId", $data['stateId']);
        $stmt->bindParam(":priorityId", $data['priorityId']);
        $stmt->bindParam(":creatorId", $data['creatorId']);
        if ($id != null) {
            $stmt->bindParam(":id", $id);
        }

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

    private function mapperTasks($tasks): array
    {
        return array_map(function ($task) {
            return [
                'name' => $task['Name_task'],
                'description' => $task['Description_task'],
                'createAt' => $task['created_at_task'],
                'limit' => $task['Limit_task'],
                'stateId' => $task['Id_state_task'],
                'priorityId' => $task['Id_priority_task'],
                'creatorId' => $task['Id_user_creator_task']
            ];
        }, $tasks);
    }
}
