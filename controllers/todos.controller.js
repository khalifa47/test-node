const Todo = require('../models/todos.model');

let todos = [
    new Todo(1, 'Buy groceries', 'High', new Date(), false, null),
    new Todo(2, 'Walk the dog', 'Low', new Date(), false, null),
    new Todo(3, 'Do laundry', 'Medium', new Date(), false, null),
    new Todo(4, 'Wash dishes', 'High', new Date(), false, null),
    new Todo(5, 'Water plants', 'Low', new Date(), false, null)
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