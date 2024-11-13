<?php
require_once '../config/cors.php';
require_once '../config/developmentDb.php';
require_once '../models/ProductModel.php';

class ProductController {
    private $productModel;

    public function __construct($db) {
        $this->productModel = new ProductModel($db);
    }
    public function handleRequest() {
      if (isset($_GET['action'])) {
          $action = htmlspecialchars($_GET['action'], ENT_QUOTES, 'UTF-8'); // Escapando a ação
          switch ($action) {
              case 'getProductById':
                  $product = $this->getProductById(intval($_GET['id']));
                  echo json_encode(Array($product));
                  break;

              default:
                  echo json_encode(['error' => 'Ação não reconhecida']);
                  break;
          }
      } else {
          echo json_encode(['error' => 'Nenhuma ação especificada']);
      }
    }
    public function getAllProducts() {
        return $this->productModel->getAllProducts();
    }

    public function getProductById($id) {
        return $this->productModel->getProductById($id);
    }

    public function createProduct($productData) {
        return $this->productModel->createProduct($productData);
    }

    public function updateProduct($id, $productData) {
        return $this->productModel->updateProduct($id, $productData);
    }

    public function deleteProduct($id) {
        return $this->productModel->deleteProduct($id);
    }
}
$dbConnection = new Database();
$controller = new ProductController($dbConnection);
$controller->handleRequest();