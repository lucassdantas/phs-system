<?php
include_once 'models/UserModel.php';

class UserController {
    private $userModel;

    public function __construct($db) {
        $this->userModel = new UserModel($db);
    }

    public function getAllUsers() {
        return $this->userModel->getAllUsers();
    }
    
    public function login($email, $password){
      $user = $this->userModel->getUserByEmail($email);
      $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
      
      if($user && $hashedPassword == $user['password']) return array('user'=>$user, 'loggedIn'=>true) ;
      
      return array('user'=>false, 'loggedIn'=>false);
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
