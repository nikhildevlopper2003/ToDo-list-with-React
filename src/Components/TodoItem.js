import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  const title={
    padding: "7px",
    fontSize: "25px",
    flex: "1",
    borderRadius: "30px",
    overflowWrap: "anywhere",
  }
  return (
        <div className='todo-item'>
      <div>
        <h4 className='todo-title' style={title}>{todo.title}</h4>
        <p className='todo-desc'>{todo.desc}</p>
      </div>
      <button className='delete-btn' onClick={() => { onDelete(todo); }}>Delete</button>
    </div>
  );
};

