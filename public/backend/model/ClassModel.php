<?php
class ClassModel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllClasses() {
        $stmt = $this->db->prepare("SELECT * FROM classes");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
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
