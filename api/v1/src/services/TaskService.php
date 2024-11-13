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
        $query = "SELECT 
t.*, 
s.Name_state, 
p.Name_priority, 
u.Name_user as creator, 
u2.Name_user as responsable 
FROM  " . $this->table_name . "  AS t  
inner join task_minder.states s on t.Id_state_task = s.Id_state
inner join task_minder.priority p on t.Id_priority_task = p.Id_priority
inner join task_minder.users u on t.Id_user_creator_task = u.Id_user
left join task_minder.users u2 on t.Id_user_responsable_task = u2.Id_user
where not s.Name_state like 'fin%' AND not s.Name_state like 'Ter%'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $this->mapperTasks($data);
    }

    public function findAllDone(): array
    {
        $query = "SELECT 
t.*, 
s.Name_state, 
p.Name_priority, 
u.Name_user as creator, 
u2.Name_user as responsable 
FROM  " . $this->table_name . "  AS t 
inner join task_minder.states s on t.Id_state_task = s.Id_state
inner join task_minder.priority p on t.Id_priority_task = p.Id_priority
inner join task_minder.users u on t.Id_user_creator_task = u.Id_user
left join task_minder.users u2 on t.Id_user_responsable_task = u2.Id_user
where s.Name_state like 'fin%' or s.Name_state like 'Ter%'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $this->mapperTasks($data);
    }

    public function findOne($id): array
    {
        $query = "SELECT t.*, s.Name_state, p.Name_priority, u.Name_user as creator, u2.Name_user as responsable FROM " . $this->table_name . " AS t 
                  inner join task_minder.states s on t.Id_state_task = s.Id_state
                  inner join task_minder.priority p on t.Id_priority_task = p.Id_priority
                  inner join task_minder.users u on t.Id_user_creator_task = u.Id_user
                  left join task_minder.users u2 on t.Id_user_responsable_task = u2.Id_user
                  WHERE Id_task = :id";
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

    public function cancelTaskDone($id = null): bool
    {
        $query = "UPDATE " . $this->table_name . " SET Id_state_task = 1 WHERE Id_task = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);

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
                'id' => $task['Id_task'],
                'name' => $task['Name_task'],
                'description' => $task['Description_task'],
                'createAt' => $task['created_at_task'],
                'limit' => $task['Limit_task'],
                'stateId' => $task['Id_state_task'],
                'priorityId' => $task['Id_priority_task'],
                'creatorId' => $task['Id_user_creator_task'],
                'stateName' => $task['Name_state'],
                'priorityName' => $task['Name_priority'],
                'creatorName' => $task['creator'],
                'responsableName' => $task['responsable'],
            ];
        }, $tasks);
    }
}
