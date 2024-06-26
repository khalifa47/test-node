const Todo = require('../models/todos.model');

let todos = [
    new Todo(1, 'Buy groceries', 1, new Date(), false, null),
    new Todo(2, 'Walk the dog', 3, new Date(), false, null),
    new Todo(3, 'Do laundry', 2, new Date(), false, null),
    new Todo(4, 'Wash dishes', 1, new Date(), false, null),
    new Todo(5, 'Water plants', 3, new Date(), false, null)
];

exports.getAllTodos = async (req, res) => {
    try {
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const todo = todos.find(todo => todo.id === parseInt(req.params.id));
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createTodo = async (req, res) => {
    const { title, priority } = req.body;
    const todo = new Todo(
        todos.length + 1,
        title,
        priority,
        new Date(),
        false,
        null
    );
    todos.push(todo);
    res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (todo) {
        const { title, priority, done } = req.body;
        if (title) todo.title = title;
        if (priority) todo.priority = priority;
        if (done) {
            todo.done = done;
            todo.doneAt = done ? new Date() : null;
        }
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
}

exports.updateTodo = async (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (todo) {
        const { title, priority, done } = req.body;
        if (title) todo.title = title;
        if (priority) todo.priority = priority;
        if (done) {
            todo.done = done;
            todo.doneAt = done ? new Date() : null;
        }
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
}

exports.deleteTodo = async (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (todo) {
        todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
        res.json({ message: 'Todo deleted' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
}