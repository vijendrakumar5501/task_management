const express = require("express");

const {
  getSingleTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task_controller");

const router = express.Router();

router.route("/").get(getAllTasks);
router.route("/tasks/:id").get(getSingleTask);
router.route("/new").post(createTask);
router.route("/edit/:id").put(updateTask);
router.route("/delete/:id").delete(deleteTask);

module.exports = router;
