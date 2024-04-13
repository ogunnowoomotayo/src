import React, { useState, usestate } from "react";

<<<<<<< HEAD
const TodoForm = () => {
    const[value, setValue]  = useState("")

    const HandleSubmit = e => {
      e.preventDefault();
=======
const Todoform = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
>>>>>>> a413153bc216b5c2496b8e07ff7a4930a261f0ac

    console.log(value);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};

export default Todoform;
