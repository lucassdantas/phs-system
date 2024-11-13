<?php
class ProductModel {
    private $db;

    public function __construct($db) {
        $this->db = $db->getConnection();
    }

    public function getAllProducts() {
        $stmt = $this->db->prepare("SELECT * FROM products");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductById($id) {
        $stmt = $this->db->prepare("SELECT * FROM products WHERE product_id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createProduct($productData) {
        $stmt = $this->db->prepare("
            INSERT INTO products (name, description, price, image_url)
            VALUES (?, ?, ?, ?)");
        return $stmt->execute([
            $productData['name'],
            $productData['description'],
            $productData['price'],
            $productData['image_url']
        ]);
    }

    public function updateProduct($id, $productData) {
        $stmt = $this->db->prepare("
            UPDATE products SET name = ?, description = ?, price = ?, image_url = ?
            WHERE product_id = ?");
        return $stmt->execute([
            $productData['name'],
            $productData['description'],
            $productData['price'],
            $productData['image_url'],
            $id
        ]);
    }

    public function deleteProduct($id) {
        $stmt = $this->db->prepare("DELETE FROM products WHERE product_id = ?");
        return $stmt->execute([$id]);
    }
}
