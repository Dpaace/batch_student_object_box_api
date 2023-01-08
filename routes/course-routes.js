const express = require("express");
const coursecontroller = require("../controllers/course_controller");
const router = express.Router();

router
  .route("/")
  .get(coursecontroller.getAllCourse)
  .post(coursecontroller.addNewCourse)
  .delete(coursecontroller.deleteAllCourse);

router
  .route("/:courseId")
  .get(coursecontroller.getCourseById)
  .put(coursecontroller.updateCoursebyId)
  .delete(coursecontroller.deleteCourseById);

module.exports = router;