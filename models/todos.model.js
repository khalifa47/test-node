class Todo {
    constructor(id, title, priority, createdAt, done, doneAt) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.createdAt = createdAt;
        this.done = done;
        this.doneAt = doneAt;
    }
}

module.exports = Todo;