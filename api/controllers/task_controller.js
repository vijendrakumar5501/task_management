// const { log } = require("console");

const handle_error = require("../middleware/handle_error");
const Task = require("../model/task_model");


//Getting a task by id

exports.getSingleTask = handle_error(async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    
    if (!task) {
        return next(("Task not found", 404));
    }
    
    res.status(200).json({
        success: true,
        task,
    });
});

//Getting all tasks

exports.getAllTasks = handle_error(async (req, res, next) => {
  const tasks = await Task.find();

  res.status(200).json({
    success: true,
    tasks,
  });
});
//Creating a task

exports.createTask = handle_error(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    success: true,
    task,
  });
});

//Updating a task

exports.updateTask = handle_error(async (req, res, next) => {
  const newTask = {
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
  };

  let task = await Task.findById(req.params.id);
  if (!task) {
    return next(new Error(`Task does not exist with id: ${req.params.id}`));
  }

  task = await Task.findByIdAndUpdate(req.params.id, newTask, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    task,
  });
});

//deleting a task

exports.deleteTask = handle_error(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new Error(`Task does not exist with id: ${req.params.id}`));
  }

  await task.deleteOne(task);

  res.status(200).json({
    success: true,
    message: "Task deleted ",
  });
});
