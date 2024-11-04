<?php
require_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once 'jwt_utils.php';
    require_once './config/developmentDb.php';
    require_once 'models/UserModel.php';

    // Obter dados do corpo da solicitação (JSON)
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->username ?? '';
    $password = $data->password ?? '';
    function login($email, $password, $db){
      $userModel = new UserModel($db);
      $userPassword = $userModel->getUserPasswordByEmail($email);
      if($userPassword && password_verify($password, $userPassword['password'])) {
        $user = $userModel->getUserByEmail($email);
        return array('userData'=>$user, 'loggedIn'=>true);
      }
      return array('user'=>false, 'loggedIn'=>false);
    }

    $db = new Database();
    $loggedUser = login($email, $password, $db);
    // Verificar se as credenciais são válidas
    if ($loggedUser['loggedIn']) {
        // Gerar o token JWT
        $jwt = JWTUtils::generateJWT($loggedUser['userData']);

        // Retornar o token em formato JSON
        echo json_encode([
            'success' => true,
            'token' => $jwt,
            'userData' => $loggedUser['userData']
        ]);
    } else {
        // Resposta de erro para credenciais inválidas
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => 'Credenciais inválidas'
        ]);
    }
} else {
    // Método inválido
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido'
    ]);
}
