<?php
require_once '../config/cors.php';
require_once '../config/developmentDb.php';
require_once '../models/UserModel.php';

class UserController {
    private $userModel;

    public function __construct($db) {
        $this->userModel = new UserModel($db);
    }
    public function handleRequest() {
      if (isset($_GET['action'])) {
          $action = htmlspecialchars($_GET['action'], ENT_QUOTES, 'UTF-8'); // Escapando a ação

          switch ($action) {
              case 'getAllUsers':
                  $limit  = intval($_GET['limit']);
                  $offset = intval($_GET['offset']);
                  $users = $this->getAllUsers($limit, $offset);
                  echo json_encode($users);
                  break;

              case 'getUsersByRole':
                  $limit  = intval($_GET['limit']);
                  $offset = intval($_GET['offset']);
                  $role = $_GET['userRole'];
                  $users = $this->getUsersByRole($role, $limit, $offset);
                  echo json_encode($users);
                  break;

              case 'getUserById':
                  $user = $this->getUserById(intval($_GET['id']));
                  echo json_encode($user);
                  break;

              case 'createUser':
                  $userData = json_decode(file_get_contents('php://input'), true);
                  $result = $this->createUser($userData);
                  echo json_encode($result);
                  break;

              case 'updateUser':
                  $id = intval($_GET['id']);
                  $userData = json_decode(file_get_contents('php://input'), true);
                  $result = $this->updateUser($id, $userData);
                  echo json_encode($result);
                  break;

              case 'deleteUser':
                  $id = intval($_GET['id']);
                  $result = $this->deleteUser($id);
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
    public function getAllUsers($limit = 10, $offset = 0) {
      return [
        'users' => $this->userModel->getAllUsers($limit, $offset),
        'usersQuantity' => $this->userModel->countUsers()['users_quantity']
      ];
    }
    public function getUsersByRole($role, $limit = 10, $offset = 0) {
      if (($role == 'admin') || ($role != 'guest' || $role != 'member' || $role != 'instructor')) $role = 'guest';
      return [
        'users' => $this->userModel->getUsersByRole($role, $limit, $offset),
        'usersQuantity' => $this->userModel->countUsers()['users_quantity']
      ];
    }
    
    public function getUserById($id) {
        return $this->userModel->getUserById($id);
    }

    public function createUser($userData) {
        return $this->userModel->createUser($userData);
    }

    public function updateUser($id, $userData) {
        return $this->userModel->updateUser($id, $userData);
    }

    public function deleteUser($id) {
        return $this->userModel->deleteUser($id);
    }
}

$dbConnection = new Database();
$controller = new UserController($dbConnection);
$controller->handleRequest();