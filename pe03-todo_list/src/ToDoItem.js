import React from "react";

const ToDoItem = ({ task, index, deleteTask }) => {
  return (
    <li>
      {task} <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
