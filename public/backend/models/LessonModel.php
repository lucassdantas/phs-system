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
    
    public function countLessons(){
      $stmt = $this->db->prepare("SELECT COUNT(lesson_id) AS lessons_quantity FROM lessons");
      $stmt->execute();
      return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function getLessonsWithAuthorAndCreator($limit, $offset){
      $stmt = $this->db->prepare(
        "SELECT
          lessons.lesson_id,
          lessons.class_id,
          lessons.phase_id,
          lessons.title,
          lessons.author_id,
          lessons.instructor_id,
          lessons.created_at,
          lessons.updated_at,

          products.product_id,
          products.name AS phase_name,

          author.user_id AS author_id,
          author.first_name AS author_first_name,
          author.last_name AS author_last_name,

          instructor.user_id AS instructor_id,
          instructor.first_name AS instructor_first_name,
          instructor.last_name AS instructor_last_name
          
        FROM
          lessons
        INNER JOIN users AS author ON author.user_id = lessons.author_id
        INNER JOIN users AS instructor ON instructor.user_id = lessons.instructor_id
        INNER JOIN products ON products.product_id = lessons.phase_id
        LIMIT :limit OFFSET :offset"
      );
      $stmt->bindValue(':limit',  (int)$limit,  PDO::PARAM_INT);
      $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
      
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
