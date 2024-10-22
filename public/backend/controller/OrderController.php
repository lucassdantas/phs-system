<?php
require_once 'models/OrderModel.php';

class OrderController {
    private $orderModel;

    public function __construct($db) {
        $this->orderModel = new OrderModel($db);
    }

    public function getAllOrders() {
        return $this->orderModel->getAllOrders();
    }

    public function getOrderById($id) {
        return $this->orderModel->getOrderById($id);
    }

    public function createOrder($orderData) {
        return $this->orderModel->createOrder($orderData);
    }

    public function updateOrder($id, $orderData) {
        return $this->orderModel->updateOrder($id, $orderData);
    }

    public function deleteOrder($id) {
        return $this->orderModel->deleteOrder($id);
    }
}
