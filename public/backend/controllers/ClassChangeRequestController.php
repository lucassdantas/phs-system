<?php
require_once '../config/cors.php';
require_once '../config/developmentDb.php';
require_once '../models/classChangeRequestModel.php';

class ClassChangeRequestController {
    private $classChangeRequestsModel;

    public function __construct($db) {
        $this->classChangeRequestsModel = new ClassChangeRequestModel($db);
    }
    public function handleRequest() {
      if (isset($_GET['action'])) {
          $action = htmlspecialchars($_GET['action'], ENT_QUOTES, 'UTF-8'); // Escapando a ação

          switch ($action) {
             
              case 'getClassChangeRequestsWithMembers':
                  $limit  = intval($_GET['limit']);
                  $offset = intval($_GET['offset']);
                  $classes = $this->getClassChangeRequests($limit, $offset);
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
    
    public function countClassChangeRequests(){
      return $classesWithMembersQuantity = $this->classChangeRequestsModel->countClassChangeRequests();
    }
    public function getClassChangeRequests($limit = 10, $offset = 0){
      $classesWithMembers = $this->classChangeRequestsModel->getClassesChangeRequestsWithusers($limit, $offset);
      $classQuantities    = $this->countClassChangeRequests()['class_change_requests_quantity'];
      $organizedClassWithMembers = [];
      $i = 0;
      foreach ($classesWithMembers as $classWithMembers) {
        $organizedClassWithMembers[$i] = [
          'current_class'=> [
            'class_id'        => $classWithMembers['current_class_id'],
            'class_address'   => $classWithMembers['current_class_address'],
            'class_date'      => $classWithMembers['current_class_date'],
            'class_vacancies' => $classWithMembers['current_class_vacancies'],
            'class_reffered_phase' => $classWithMembers['current_class_product_id'],
          ],
          'new_class' => [
            'class_id'        => $classWithMembers['new_class_id'],
            'class_address'   => $classWithMembers['new_class_address'],
            'class_date'      => $classWithMembers['new_class_date'],
            'class_vacancies' => $classWithMembers['new_class_vacancies'],
            'class_reffered_phase' => $classWithMembers['new_class_product_id'],
          ],
          'user' => [
            "userId"            => $classWithMembers['user_id'],
            "user_first_name"  => $classWithMembers['first_name'],
            "user_last_name"   => $classWithMembers['last_name'],
            "user_email"       => $classWithMembers['email'],
            "user_phone"       => $classWithMembers['phone'],
            "user_phase_acquired_id" => $classWithMembers['phase_acquired_id'],
            "user_address"   => $classWithMembers['address'],
            "user_city"      => $classWithMembers['city'],
            "user_state"     => $classWithMembers['state'],
            "user_zip_code"  => $classWithMembers['zip_code'],
            "user_user_role" => $classWithMembers['user_role'],
          ],
        ];
        $i++;
      }
      return json_encode(['classChangeRequestsWithMembers' => $organizedClassWithMembers, 'class_change_requests_quantity' => $classQuantities]);
    }

    public function createClass($classData) {
        return $this->classChangeRequestsModel->createClass($classData);
    }

    public function updateClass($id, $classData) {
        return $this->classChangeRequestsModel->updateClass($id, $classData);
    }

    public function deleteClass($id) {
        return $this->classChangeRequestsModel->deleteClass($id);
    }
}

// Instância do controlador e chamada do método handleRequest
$dbConnection = new Database();
$controller = new ClassChangeRequestController($dbConnection);
$controller->handleRequest();