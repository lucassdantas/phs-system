<?php
require_once 'config/cors.php';

require 'vendor/autoload.php'; // Inclua seu pacote JWT

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$secret_key = "your_secret_key";

// Obtém o token do corpo da requisição
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->token)) {
    try {
        // Decodifica o JWT
        $decoded = JWT::decode($data->token, new Key($secret_key, 'HS256'));

        // Resposta de sucesso
        echo json_encode(["valid" => true]);
    } catch (Exception $e) {
        // Token inválido
        echo json_encode(["valid" => false]);
    }
} else {
    echo json_encode(["valid" => false]);
}
?>
