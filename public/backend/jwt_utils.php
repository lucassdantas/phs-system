<?php
require_once __DIR__ . '/vendor/autoload.php';

use \Firebase\JWT\JWT;

class JWTUtils {
    private static $secret_key = 'lucas'; // Altere para uma chave mais segura
    private static $algorithm = 'HS256'; // Algoritmo de assinatura

    // Gerar token JWT
    public static function generateJWT($username) {
        $issuedAt = time();
        $expirationTime = $issuedAt + 3600; // Token válido por 1 hora
        $payload = [
            'iat' => $issuedAt,
            'exp' => $expirationTime,
            'username' => $username,
            'isJwtAuthenticated' => false
        ];

        return JWT::encode($payload, self::$secret_key, self::$algorithm);
    }

    // Verificar token JWT
    public static function validateJWT($jwt) {
        try {
            $decoded = JWT::decode($jwt, self::$secret_key, [self::$algorithm]);
            return (array) $decoded;
        } catch (Exception $e) {
            return null;
        }
    }
}
