import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" })
        .then((res) => setTodos(todos.filter((todo) => todo.id !== id)))
        .catch((error) => console.error("Error deleting todo:", error));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const addTodo = async (todo) => {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => setTodos([data, ...todos]))
      .catch((error) => console.error("Error adding todo:", error));
  };

  const updateTodo = async (todo) => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) =>
        setTodos([data, ...todos.filter((t) => t.id !== data.id)])
      )
      .catch((error) => console.error("Error updating todo:", error));
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default Todos;
