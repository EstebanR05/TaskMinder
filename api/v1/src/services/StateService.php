<?php

require_once __DIR__ . '/../config/Database.php';

class StateService
{
    private $conn;
    private $table_name = "states";

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
        return $this->mapperStates($data);
    }

    public function findOne($id): array
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE Id_state = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        $data =  $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $this->mapperStates($data);
    }

    public function save($data, $id = null): bool
    {
        ($id != null) ?
            $query = "UPDATE " . $this->table_name . " set Name_state = :name where Id_state = :id"
            :
            $query = "INSERT INTO " . $this->table_name . " (Id_state, Name_state) VALUES (null, :name)";

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
        $query = "DELETE FROM " . $this->table_name . " WHERE Id_state = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);

        if (!$stmt->execute()) {
            throw new Exception("Error Processing Request", 1);
        }

        return true;
    }

    private function mapperStates($states): array
    {
        return array_map(function ($state) {
            return [
                'id' => $state['Id_state'],
                'name' => $state['Name_state']
            ];
        }, $states);
    }
}
