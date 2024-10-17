<?php
require_once 'config/cors.php';
require_once 'jwt_utils.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obter dados do corpo da solicitação (JSON)
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username ?? '';
    $password = $data->password ?? '';
    // Credenciais fictícias
    $validUsername = 'user';
    $validPassword = 'password';

    // Verificar se as credenciais são válidas
    if ($username === $validUsername && $password === $validPassword) {
        // Gerar o token JWT
        $jwt = JWTUtils::generateJWT($username);

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
