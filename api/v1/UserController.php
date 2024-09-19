<?php
include_once './src/config/db.php';

class UserController {
    private $conn;
    private $table_name = "Users";

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function getUsers() {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createUser($data) {
        $query = "INSERT INTO " . $this->table_name . " (name, email) VALUES (:name, :email)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $data['name']);
        $stmt->bindParam(":email", $data['email']);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function updateUser($id, $data) {
        $query = "UPDATE " . $this->table_name . " SET name = :name, email = :email WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $data['name']);
        $stmt->bindParam(":email", $data['email']);
        $stmt->bindParam(":id", $id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function deleteUser($id) {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
