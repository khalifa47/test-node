const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');

// Get all todos
router.get('/', todosController.getAllTodos);

// Get a todo by id
router.get('/:id', todosController.getTodoById);

// Create a new todo
router.post('/', todosController.createTodo);

// Update a todo
router.put('/:id', todosController.updateTodo);

module.exports = router;