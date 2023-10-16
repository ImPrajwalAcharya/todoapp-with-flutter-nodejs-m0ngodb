const router = require('express').Router();
const TodoController = require('../controller/todo_controller');
router.post('/storetodo', TodoController.createtodo);
router.post('/gettodo', TodoController.gettodo);
router.post('/deletetodo', TodoController.deleteTask);
module.exports = router;

