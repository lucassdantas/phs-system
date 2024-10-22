<?php
require_once 'models/ClassModel.php';

class ClassController {
    private $classModel;

    public function __construct($db) {
        $this->classModel = new ClassModel($db);
    }

    public function getAllClasses() {
        return $this->classModel->getAllClasses();
    }

    public function getClassById($id) {
        return $this->classModel->getClassById($id);
    }

    public function createClass($classData) {
        return $this->classModel->createClass($classData);
    }

    public function updateClass($id, $classData) {
        return $this->classModel->updateClass($id, $classData);
    }

    public function deleteClass($id) {
        return $this->classModel->deleteClass($id);
    }
}
