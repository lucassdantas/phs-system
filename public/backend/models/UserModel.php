<?php
class UserModel {
    private $db;

    public function __construct($db) {
      $this->db = $db->getConnection();
    }
    
    public function getAllUsers() {
      $stmt = $this->db->prepare("SELECT user_id, first_name, last_name, email, phone, phase_acquired_id, address, city, state, zip_code, country, user_role, created_at FROM users");
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getUserPasswordByEmail($email) {
      $stmt = $this->db->prepare("SELECT password FROM users WHERE email = ?");
      $stmt->execute([$email]);
      return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByEmail($email) {
      $stmt = $this->db->prepare("SELECT user_id, first_name, last_name, email, phone, phase_acquired_id, address, city, state, zip_code, country, user_role, created_at FROM users WHERE email = ?");
      $stmt->execute([$email]);
      return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserById($id) {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE user_id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createUser($userData) {
        $stmt = $this->db->prepare("
            INSERT INTO users (first_name, last_name, email, password, phone, address, city, state, zip_code, country, user_role)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        return $stmt->execute([
            $userData['first_name'],
            $userData['last_name'],
            $userData['email'],
            password_hash($userData['password'], PASSWORD_DEFAULT),
            $userData['phone'],
            $userData['address'],
            $userData['city'],
            $userData['state'],
            $userData['zip_code'],
            $userData['country'],
            $userData['user_role']
        ]);
    }

    public function updateUser($id, $userData) {
        $stmt = $this->db->prepare("
            UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, city = ?, state = ?, zip_code = ?, country = ?
            WHERE user_id = ?");
        return $stmt->execute([
            $userData['first_name'],
            $userData['last_name'],
            $userData['email'],
            $userData['phone'],
            $userData['address'],
            $userData['city'],
            $userData['state'],
            $userData['zip_code'],
            $userData['country'],
            $id
        ]);
    }

    public function deleteUser($id) {
        $stmt = $this->db->prepare("DELETE FROM users WHERE user_id = ?");
        return $stmt->execute([$id]);
    }
}
