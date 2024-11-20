<?php
require_once '../config/cors.php';
require_once '../config/developmentDb.php';
require_once '../models/ClassModel.php';

class ClassController {
    private $classModel;

    public function __construct($db) {
        $this->classModel = new ClassModel($db);
    }
    public function handleRequest() {
      if (isset($_GET['action'])) {
          $action = htmlspecialchars($_GET['action'], ENT_QUOTES, 'UTF-8'); // Escapando a ação

          switch ($action) {
              case 'getAllClasses':
                  $limit  = intval($_GET['limit']);
                  $offset = intval($_GET['offset']);
                  $classes = $this->getAllClasses($limit, $offset);
                  echo json_encode($classes);
                  break;

              case 'getClassById':
                  $class = $this->getClassById(intval($_GET['id']));
                  echo json_encode($class);
                  break;

              case 'getSelectedClassWithMembers':
                  $limit  = intval($_GET['limit']);
                  $offset = intval($_GET['offset']);
                  $id     = intval($_GET['selectedClassId']);
                  $classes = $this->getClassWithMembers($id, $limit, $offset);
                  echo json_encode($classes);
                  break;

              case 'createClass':
                  $classData = json_decode(file_get_contents('php://input'), true);
                  $result = $this->createClass($classData);
                  echo json_encode($result);
                  break;

              case 'updateClass':
                  $id = intval($_GET['id']);
                  $classData = json_decode(file_get_contents('php://input'), true);
                  $result = $this->updateClass($id, $classData);
                  echo json_encode($result);
                  break;

              case 'deleteClass':
                  $id = intval($_GET['id']);
                  $result = $this->deleteClass($id);
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
    public function getAllClasses($limit = 10, $offset = 0) {
        return [
          'classes' => $this->classModel->getAllClasses($limit, $offset),
          'classQuantity' => $this->classModel->countClasses()['classes_quantity']
        ];
    }
    
    public function countClasses(){
      return $classesWithMembersQuantity = $this->classModel->countClasses();
    }
    public function countClassMembers($classId){
      return $classesWithMembersQuantity = $this->classModel->countClassMembers($classId);
    }
    public function getClassWithMembers($id, $limit = 10, $offset = 0) {
      // Obtém a turma com os membros relacionados
      $classesWithMembers = $this->classModel->getClassWithMembers($id, $limit, $offset);
      $classQuantities = $this->countClassMembers($id)['members_quantity'];
  
      // Verifica se há dados para processar
      if (empty($classesWithMembers)) {
          return json_encode(['classesWithMembers' => [], 'classQuantities' => $classQuantities]);
      }
  
      // Inicializa o array da turma e a lista de usuários
      $organizedClassWithMembers = [
          'class_id'        => $classesWithMembers[0]['class_id'],
          'class_address'   => $classesWithMembers[0]['class_address'],
          'class_date'      => $classesWithMembers[0]['class_date'],
          'class_vacancies' => $classesWithMembers[0]['class_vacancies'],
          'class_reffered_phase' => $classesWithMembers[0]['product_id'],
          'users'           => [] // Lista de usuários será preenchida no loop
      ];
  
      // Adiciona os usuários ao índice 'users'
      foreach ($classesWithMembers as $classWithMembers) {
          $organizedClassWithMembers['users'][] = [
              "userId"            => $classWithMembers['user_id'],
              "user_first_name"   => $classWithMembers['first_name'],
              "user_last_name"    => $classWithMembers['last_name'],
              "user_email"        => $classWithMembers['email'],
              "user_phone"        => $classWithMembers['phone'],
              "user_phase_acquired_id" => $classWithMembers['phase_acquired_id'],
              "user_address"      => $classWithMembers['address'],
              "user_city"         => $classWithMembers['city'],
              "user_state"        => $classWithMembers['state'],
              "user_zip_code"     => $classWithMembers['zip_code'],
              "user_user_role"    => $classWithMembers['user_role'],
              "user_joined_at"    => $classWithMembers['joined_at']
          ];
      }
  
      // Retorna a turma com os usuários e a quantidade total de membros
      return json_encode([
          'classesWithMembers' => [$organizedClassWithMembers], // Retorna como lista de turmas
          'classQuantities' => $classQuantities
      ]);
  }
  
    public function getClassById($id) {
        return $this->classModel->getClassById($id);
    }

    public function createClass($classData) {
        return $this->classModel->createClass($classData);
    }

    public function updateClass($id, $classData) {
        return $this->classModel->updateClass($id, $classData);
    }

    public function deleteClass($id) {
        return $this->classModel->deleteClass($id);
    }
}

// Instância do controlador e chamada do método handleRequest
$dbConnection = new Database();
$controller = new ClassController($dbConnection);
$controller->handleRequest();