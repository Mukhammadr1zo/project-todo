import React from "react";
import Todoitem from "./TodoItem";
import Button from "./Button";
import "./TodoList.css";

const Todolist = () => {
  return (
    <div className="todo-list">
      <form className="form">
        <input className="input" type="text" placeholder="Your Plans" />
        <button className="add-btn" type="button">
          Add
        </button>
      </form>
      <Todoitem text={"Reading"} />
      <Todoitem text={"Running"} />
      <Todoitem text={"Sleeping"} />
      <Todoitem text={"Coding"} />

      <div className="btn-box">
        <Button text="All" btnType="all-btn" />
        <Button text="Completed" btnType="completed-btn" />
        <Button text="Uncompleted" btnType="uncompleted-btn" />
      </div>
    </div>
  );
};
export default Todolist;
