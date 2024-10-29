<?php
require_once 'models/PaymentModel.php';

class PaymentController {
    private $paymentModel;

    public function __construct($db) {
        $this->paymentModel = new PaymentModel($db);
    }

    public function getAllPayments() {
        return $this->paymentModel->getAllPayments();
    }

    public function getPaymentById($id) {
        return $this->paymentModel->getPaymentById($id);
    }

    public function createPayment($paymentData) {
        return $this->paymentModel->createPayment($paymentData);
    }

    public function updatePayment($id, $paymentData) {
        return $this->paymentModel->updatePayment($id, $paymentData);
    }

    public function deletePayment($id) {
        return $this->paymentModel->deletePayment($id);
    }
}
