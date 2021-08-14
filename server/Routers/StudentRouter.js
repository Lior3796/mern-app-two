const express = require("express");
const StudentRouter = express.Router();
const studentController = require("../Controllers/StudentController");

StudentRouter.get("/",studentController.getStudents);
StudentRouter.post("/",studentController.postStudents);


module.exports = StudentRouter;