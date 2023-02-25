import React from "react";

const TodoItem = ({ id, completed, text, removeTodo, toggleTodoComplete }) => {
  return (
    <li>
      <input
        type={"checkbox"}
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="del" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
