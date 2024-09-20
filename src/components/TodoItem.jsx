import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <div>
        <button 
          className={`btn btn-${todo.completed ? 'warning' : 'success'} me-2`} 
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? 'No Completada' : 'Completada'}
        </button>
        <button 
          className="btn btn-danger" 
          onClick={() => deleteTodo(todo.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TodoItem;