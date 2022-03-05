import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "./TodoList.css";

const Todoitem = ({ text }) => {
  return (
    <div className="item-box">
      <p className="todo-item">{text}</p>
      <Button text="Delete" btnType="delete-btn" />
    </div>
  );
};

Todoitem.propTypes = {
  text: PropTypes.string,
};
Todoitem.defaultProps = {
  text: "Default",
};

export default Todoitem;
