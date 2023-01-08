const Course = require("../models/Course");

const getAllCourse = (req, res, next) => {
  Course.find()
    .then((course) => {
      res.json(course);
    })
    .catch(next);
};

const addNewCourse = (req, res, next) => {
  Course.findOne({ coursename: req.body.coursename })
    .then((course) => {
      if (course != null) {
        let err = new Error(
          `this ${req.body.coursename} course already exists`
        );
        res.status(400);
        return next(err);
      } else {
        course = new Course(req.body);
        course
          .save()
          .then((course) => {
            res.json(course);
          })
          .catch(next);
      }
    })
    .catch(next);
};

const deleteAllCourse = (req, res, next) => {
  Course.deleteMany()
    .then((reply) => {
      res.json(reply);
    })
    .catch(next);
};

const getCourseById = (req, res, next) => {
  Course.findById(req.params.courseId)
    .then((course) => {
      res.json(course);
    })
    .catch(next);
};

const updateCoursebyId = (req, res, next) => {
  Course.findByIdAndUpdate(
    req.params.courseId,
    { $set: req.body },
    { new: true }
  )
    .then((course) => {
      res.json(course);
    })
    .catch(next);
};

const deleteCourseById = (req, res, next) => {
  Course.findByIdAndRemove(req.params.courseId)
    .then((reply) => {
      res.json(reply);
    })
    .catch(next);
};

module.exports = {
  getAllCourse,
  addNewCourse,
  deleteAllCourse,
  getCourseById,
  updateCoursebyId,
  deleteCourseById
};
