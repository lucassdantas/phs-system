<?php
require_once 'models/ProductModel.php';

class ProductController {
    private $productModel;

    public function __construct($db) {
        $this->productModel = new ProductModel($db);
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
