import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1>ToDo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ToDoList todos={todos} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
