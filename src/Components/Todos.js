import React from 'react';
import { TodoItem } from './TodoItem';
import './todo.css'; 

const Todos = (props) => {
  const mystyle = {
    margin: '0.75rem',
    fontSize: '30px',
    fontFamily: "'Roboto', sans-serif",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.25em 0.5em',
    borderRadius: '25px',
    backgroundColor: 'rgb(26, 27, 27)',
    transition: 'background-color 200ms ease-in-out',
  };

  return (
    <div className="todos-container standard" >
      <h3 className='text-center todos-title' style={mystyle}>Todos List</h3>
      {props.todos.length === 0 ? (
        <p className='text-center no-todos'>No Todos to display.</p>
      ) : (
        props.todos.map((todo) => (
          <div key={todo.sno} className="todo-item">
            <TodoItem todo={todo} onDelete={props.onDelete} />
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;

