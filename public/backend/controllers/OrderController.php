<?php
require_once '../config/cors.php';
require_once '../config/developmentDb.php';
require_once '../models/OrderModel.php';

class OrderController {
    private $orderModel;

    public function __construct($db) {
        $this->orderModel = new OrderModel($db);
    }

    public function handleRequest() {
      if (isset($_GET['action'])) {
        $action = htmlspecialchars($_GET['action'], ENT_QUOTES, 'UTF-8'); // Escapando a ação

        switch ($action) {
            case 'getAllOrders':
                $limit  = intval($_GET['limit']);
                $offset = intval($_GET['offset']);
                $orders = $this->getAllOrders($limit, $offset);
                echo json_encode($orders);
                break;

            default:
                echo json_encode(['error' => 'Ação não reconhecida']);
                break;
        }
      } else {
          echo json_encode(['error' => 'Nenhuma ação especificada']);
      }
    }

    public function getAllOrders($limit, $offset) {
      $orders = $this->orderModel->getAllOrders($limit = 10, $offset = 0);
      $ordersQuantity = $this->orderModel->countOrders();
      return Array('productData'=>$orders, 'ordersQuantity'=>$ordersQuantity);
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
