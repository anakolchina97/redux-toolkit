import React from "react";

const InputField = ({ text, addTodo, setText }) => {
  return (
    <div className="form">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default InputField;
