import React, { useState } from "react";
import "./TodoList.css";
const Todoitem = ({ todo, onDelete }) => {
  return (
    <div className="item-box">
      <p className="todo-item">
        {todo.title} {todo.isCompleted}
      </p>
      <button
        className="delete-btn"
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todoitem;
