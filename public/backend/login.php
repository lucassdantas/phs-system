<?php
require_once 'config/cors.php';
require_once 'jwt_utils.php';
require_once './controllers/UserController.php';
require_once './config/developmentDb.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obter dados do corpo da solicitação (JSON)
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->username ?? '';
    $password = $data->password ?? '';

    $db = new Database();
    $UserController = new UserController($db);
    $loggedUser = $UserController->login($email, $password);
    // Verificar se as credenciais são válidas
    if ($loggedUser['loggedIn']) {
        // Gerar o token JWT
        $jwt = JWTUtils::generateJWT($loggedUser['userData']);

        // Retornar o token em formato JSON
        echo json_encode([
            'success' => true,
            'token' => $jwt
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
