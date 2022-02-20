import React, { useState } from "react";
import Todoitem from "./TodoItem";
import "./TodoList.css";

const Todolist = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos((state) => state.filter((item) => item.id !== id));
  };

  const handleAddTodo = (evt) => {
    evt.preventDefault();
    let todoInput = document.querySelector(".input");

    const newTodo = {
      id: todos[todos.length - 1]?.id + 1 || 1,
      title: todoInput.value,
      isCompleted: false,
    };
    todoInput.value = null;
    setTodos((state) => [...state, newTodo]);
  };
  return (
    <div className="todo-list">
      <form className="form">
        <input className="input" type="text" placeholder="Your Plans" />
        <button className="add-btn" type="button" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      {todos.map((element) => {
        return (
          <Todoitem key={element.id} todo={element} onDelete={handleDelete} />
        );
      })}
    </div>
  );
};
export default Todolist;
