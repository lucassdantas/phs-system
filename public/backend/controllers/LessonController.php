<?php
require_once '../config/cors.php';
require_once '../config/developmentDb.php';
require_once '../models/LessonModel.php';


class LessonController {
    private $lessonModel;

    public function __construct($db) {
        $this->lessonModel = new LessonModel($db);
    }

    public function handleRequest() {
        if (isset($_GET['action'])) {
            $action = htmlspecialchars($_GET['action'], ENT_QUOTES, 'UTF-8'); // Escapando a ação

            switch ($action) {
                case 'getAllLessons':
                    $lessons = $this->getAllLessons();
                    echo json_encode($lessons);
                    break;

                case 'getLessonById':
                    $lesson = $this->getLessonById();
                    echo json_encode($lesson);
                    break;

                case 'createLesson':
                    $lessonData = json_decode(file_get_contents('php://input'), true);
                    $result = $this->createLesson($lessonData);
                    echo json_encode($result);
                    break;

                case 'updateLesson':
                    $id = intval($_GET['id']);
                    $lessonData = json_decode(file_get_contents('php://input'), true);
                    $result = $this->updateLesson($id, $lessonData);
                    echo json_encode($result);
                    break;

                case 'deleteLesson':
                    $id = intval($_GET['id']);
                    $result = $this->deleteLesson($id);
                    echo json_encode($result);
                    break;

                default:
                    echo json_encode(['error' => 'Ação não reconhecida']);
                    break;
            }
        } else {
            echo json_encode(['error' => 'Nenhuma ação especificada']);
        }
    }

    public function getAllLessons() {
        return $this->lessonModel->getAllLessons();
    }

    public function getLessonById() {
        $id = intval($_GET['id']); 
        $identifierColumn = isset($_GET['columnIdentifier']) ? htmlspecialchars($_GET['columnIdentifier'], ENT_QUOTES, 'UTF-8') : 'lesson_id';

        $validColumns = ['lesson_id', 'author_id', 'instructor_id', 'class_id', 'phase_id'];
        if (!in_array($identifierColumn, $validColumns)) {
            return ['error' => 'Identificador inválido'];
        }

        return $this->lessonModel->getLessonById($id, $identifierColumn);
    }

    public function createLesson($lessonData) {
        // Validação dos dados da lição
        $lessonData = $this->sanitizeLessonData($lessonData);
        return $this->lessonModel->createLesson($lessonData);
    }

    public function updateLesson($id, $lessonData) {
        $id = intval($id); // Converte para inteiro para evitar injeção
        $lessonData = $this->sanitizeLessonData($lessonData);
        return $this->lessonModel->updateLesson($id, $lessonData);
    }

    public function deleteLesson($id) {
        $id = intval($id); // Converte para inteiro para evitar injeção
        return $this->lessonModel->deleteLesson($id);
    }

    private function sanitizeLessonData($data) {
        // Aqui você pode aplicar sanitizações adicionais para cada campo
        return array_map(function($value) {
            return htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
        }, $data);
    }
}

// Instância do controlador e chamada do método handleRequest
$dbConnection = new Database();
$controller = new LessonController($dbConnection);
$controller->handleRequest();
