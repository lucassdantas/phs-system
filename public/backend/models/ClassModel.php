<?php
class ClassModel {
    private $db;

    public function __construct($db) {
        $this->db = $db->getConnection();
    }

    public function getAllClasses($limit, $offset) {
        $stmt = $this->db->prepare("SELECT * FROM classes LIMIT :limit OFFSET :offset;");
        $stmt->bindValue(':limit',  (int)$limit,  PDO::PARAM_INT);
        $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getClassesWithMembers($limit, $offset){
      $stmt = $this->db->prepare(
        "SELECT
          classes.class_id,
          classes.class_vacancies,
          classes.product_id,
          classes.class_date,
          classes.class_address,
    
          class_members_list.user_id,
          class_members_list.class_id,
          class_members_list.joined_at,
          class_members_list.created_at as class_members_list_created_at,
          
          users.user_id,
          users.first_name,
          users.last_name,
          users.email,
          users.phone,
          users.phase_acquired_id,
          users.address,
          users.city,
          users.state,
          users.zip_code,
          users.user_role
        FROM
          classes
        INNER JOIN class_members_list ON classes.class_id = class_members_list.class_id
        INNER JOIN users ON class_members_list.user_id = users.user_id
        LIMIT :limit OFFSET :offset"
      );
      
      $stmt->bindValue(':limit',  (int)$limit,  PDO::PARAM_INT);
      $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
      
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function countClasses(){
      $stmt = $this->db->prepare("SELECT COUNT(class_id) AS classes_quantity FROM classes");
      $stmt->execute();
      return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function getClassById($id) {
        $stmt = $this->db->prepare("SELECT * FROM classes WHERE class_id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createClass($classData) {
        $stmt = $this->db->prepare("
            INSERT INTO classes (class_vacancies, product_id, class_date, class_address)
            VALUES (?, ?, ?, ?)");
        return $stmt->execute([
            $classData['class_vacancies'],
            $classData['product_id'],
            $classData['class_date'],
            $classData['class_address']
        ]);
    }

    public function updateClass($id, $classData) {
        $stmt = $this->db->prepare("
            UPDATE classes SET class_vacancies = ?, product_id = ?, class_date = ?, class_address = ?
            WHERE class_id = ?");
        return $stmt->execute([
            $classData['class_vacancies'],
            $classData['product_id'],
            $classData['class_date'],
            $classData['class_address'],
            $id
        ]);
    }

    public function deleteClass($id) {
        $stmt = $this->db->prepare("DELETE FROM classes WHERE class_id = ?");
        return $stmt->execute([$id]);
    }
}

