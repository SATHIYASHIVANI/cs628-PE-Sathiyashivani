import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, deleteTask }) => {
  return (
    <ul>
      {todos.map((task, index) => (
        <ToDoItem key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default ToDoList;
