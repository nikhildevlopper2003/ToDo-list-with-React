import React, { useState } from 'react';
import "./addTodo.css";

export const AddTodo = ({ addTodo }) => {
  const Mystyle = {
    margin: '0.75rem',
    fontSize: '50px',
    padding:0,
    color:'peach'
    
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Task name or description cannot be blank");
      return;
    }
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="form-container">
      <h1 id="header" style={Mystyle}>Add Your Tasks</h1>
      <form className="todo-form" onSubmit={submit}>
        <input
          type="text"
          className="task-name" 
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="task-description" 
          placeholder="Task Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit" className="btn-submit">
          I got this
        </button>
      </form>
    </div>
  );
};

