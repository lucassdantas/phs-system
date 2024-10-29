<?php
class PaymentModel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllPayments() {
        $stmt = $this->db->prepare("SELECT * FROM payments");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getPaymentById($id) {
        $stmt = $this->db->prepare("SELECT * FROM payments WHERE payment_id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createPayment($paymentData) {
        $stmt = $this->db->prepare("
            INSERT INTO payments (order_id, payment_date, amount, payment_method, payment_status)
            VALUES (?, ?, ?, ?, ?)");
        return $stmt->execute([
            $paymentData['order_id'],
            $paymentData['payment_date'],
            $paymentData['amount'],
            $paymentData['payment_method'],
            $paymentData['payment_status'],
        ]);
    }

    public function updatePayment($id, $paymentData) {
        $stmt = $this->db->prepare("
            UPDATE payments SET order_id = ?, payment_date = ?, amount = ?, payment_method = ?, payment_status = ?
            WHERE payment_id = ?");
        return $stmt->execute([
            $paymentData['order_id'],
            $paymentData['payment_date'],
            $paymentData['amount'],
            $paymentData['payment_method'],
            $paymentData['payment_status'],
            $id
        ]);
    }

    public function deletePayment($id) {
        $stmt = $this->db->prepare("DELETE FROM payments WHERE payment_id = ?");
        return $stmt->execute([$id]);
    }
}
