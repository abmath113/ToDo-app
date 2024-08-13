import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo"; // Corrected import

const TodoWrapper = () => {
  // Load initial todos from localStorage or set to an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Use useEffect to save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos, // what is this doing?
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id )) 
  }

  return (
    <div className="TodoWrapper">

      <h1>Get things done!</h1>

      <TodoForm addTodo={addTodo} />

      {todos.map((todo, index) => (

        <Todo task={todo} key={index} 
        toggleComplete={toggleComplete}
        deleteTodo = {deleteTodo}
         />
      ))}
    </div>
  );
};

export default TodoWrapper;
