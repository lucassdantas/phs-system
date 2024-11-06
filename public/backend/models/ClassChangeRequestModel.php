<?php
class ClassChangeRequestModel {
    private $db;

    public function __construct($db) {
        $this->db = $db->getConnection();
    }

    public function getClassesChangeRequestsWithusers($limit, $offset){
      $stmt = $this->db->prepare(
        "SELECT
          class_change_requests.user_id,
          class_change_requests.current_class_id,
          class_change_requests.new_class_id,
          class_change_requests.created_at as class_change_requests_created_at,
          
          current_class.class_id AS current_class_id,
          current_class.class_vacancies AS current_class_vacancies,
          current_class.product_id AS current_class_product_id,
          current_class.class_date AS current_class_date,
          current_class.class_address AS current_class_address,

          new_class.class_id AS new_class_id,
          new_class.class_vacancies AS new_class_vacancies,
          new_class.product_id AS new_class_product_id,
          new_class.class_date AS new_class_date,
          new_class.class_address AS new_class_address,
            
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
          class_change_requests
        INNER JOIN classes AS current_class ON class_change_requests.current_class_id  = current_class.class_id
        INNER JOIN classes AS new_class ON class_change_requests.new_class_id  = new_class.class_id
        INNER JOIN users ON class_change_requests.user_id = users.user_id
        LIMIT :limit OFFSET :offset"
      );
      
      $stmt->bindValue(':limit',  (int)$limit,  PDO::PARAM_INT);
      $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
      
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function countClassChangeRequests(){
      $stmt = $this->db->prepare("SELECT COUNT(current_class_id) AS class_change_requests_quantity FROM class_change_requests");
      $stmt->execute();
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

