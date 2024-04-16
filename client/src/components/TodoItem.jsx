import { useState } from "react";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [title, setTitle] = useState(todo.title);
  const [priority, setPriority] = useState(todo.priority);
  const [done, setDone] = useState(todo.done);

  return (
    <p>
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {title}
      </span>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={done}
      />
      <input
        type="number"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        disabled={done}
      />
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => setDone(e.target.checked)}
      />
      <button
        onClick={() => onUpdate({ id: todo.id, title, priority, done })}
        disabled={done}
      >
        Update
      </button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </p>
  );
};

export default TodoItem;
