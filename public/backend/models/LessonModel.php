<?php
class LessonModel {
    private $db;

    public function __construct($db) {
        $this->db = $db->getConnection();
    }

    public function getAllLessons() {
        $stmt = $this->db->prepare("SELECT * FROM lessons");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getLessonById($id, $identifierColumn = 'lesson_id') {
        $stmt = $this->db->prepare("SELECT * FROM lessons WHERE $identifierColumn = ?");
        $stmt->execute([$id]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public function createLesson($lessonData) {
        $stmt = $this->db->prepare("
            INSERT INTO lessons (author_id, instructor_id, class_id, phase_id, title, description, supplementary_material)
            VALUES (?, ?, ?, ?, ?, ?, ?)");
        return $stmt->execute([
            $lessonData['author_id'],
            $lessonData['instructor_id'],
            $lessonData['class_id'],
            $lessonData['phase_id'],
            $lessonData['title'],
            $lessonData['description'],
            $lessonData['supplementary_material'],
        ]);
    }

    public function updateLesson($id, $lessonData) {
        $stmt = $this->db->prepare("
            UPDATE lessons SET author_id = ?, instructor_id = ?, class_id = ?, phase_id = ?, title = ?, description = ?, supplementary_material = ?
            WHERE lesson_id = ?");
        return $stmt->execute([
          $lessonData['author_id'],
          $lessonData['instructor_id'],
          $lessonData['class_id'],
          $lessonData['phase_id'],
          $lessonData['title'],
          $lessonData['description'],
          $lessonData['supplementary_material'],
          $id
        ]);
    }

    public function deleteLesson($id) {
        $stmt = $this->db->prepare("DELETE FROM lessons WHERE lesson_id = ?");
        return $stmt->execute([$id]);
    }
}
