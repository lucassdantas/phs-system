<?php
class OrderModel {
    private $db;

    public function __construct($db) {
        $this->db = $db->getConnection();
    }

    public function getAllOrders($limit, $offset) {
        $stmt = $this->db->prepare("SELECT * FROM orders LIMIT:limit OFFSET:offset");
        $stmt->bindValue(':limit',  (int)$limit,  PDO::PARAM_INT);
        $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getOrderById($id) {
        $stmt = $this->db->prepare("SELECT * FROM orders WHERE order_id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function countOrders(){
      $stmt = $this->db->prepare('SELECT COUNT(order_id) AS orders_quantity FROM lessons');
      $stmt->execute();
      return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function createOrder($orderData) {
        $stmt = $this->db->prepare("
            INSERT INTO orders (user_id, total_amount, shipping_address, status, payment_status)
            VALUES (?, ?, ?, ?, ?)");
        return $stmt->execute([
            $orderData['user_id'],
            $orderData['total_amount'],
            $orderData['shipping_address'],
            $orderData['status'],
            $orderData['payment_status']
        ]);
    }

    public function updateOrder($id, $orderData) {
        $stmt = $this->db->prepare("
            UPDATE orders SET total_amount = ?, shipping_address = ?, status = ?, payment_status = ?
            WHERE order_id = ?");
        return $stmt->execute([
            $orderData['total_amount'],
            $orderData['shipping_address'],
            $orderData['status'],
            $orderData['payment_status'],
            $id
        ]);
    }

    public function deleteOrder($id) {
        $stmt = $this->db->prepare("DELETE FROM orders WHERE order_id = ?");
        return $stmt->execute([$id]);
    }
}
