import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type={"checkbox"}
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span className="del" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
