const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');

// Get all todos
router.get('/', todosController.getAllTodos);

// Get a todo by id
router.get('/:id', todosController.getTodoById);

module.exports = router;