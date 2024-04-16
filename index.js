const express = require('express')
const app = express()
const PORT = 3000;
const catsRouter = require('./routes/cats.router');
const todosRouter = require('./routes/todos.router');

app.use(express.json());

app.use('/cats', catsRouter);

app.use('/todos', todosRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});