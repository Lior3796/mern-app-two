const express = require("express");
const StudentRouter = express.Router();
const studentController = require("../Controllers/StudentController");

StudentRouter.get("/",studentController.getStudents);

module.exports = StudentRouter;