import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // prevents page from reloading
    // Validation: Check if the input is empty
    if (!value.trim()) {
      alert("Task cannot be empty");
      return;
    }

    addTodo(value);  // Add todo if the input is not empty
    setValue('');  // Clear the input field after adding the todo
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} 
    onChange={(e) => setValue(e.target.value)} 
    className="todo-input" 
    placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
};

export default TodoForm;