import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = ({ todos, toggleTodo, deleteTodo, fetchTodos }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    if (newFilter === 'all') {
      fetchTodos();
    } else {
      fetchTodos(newFilter === 'completed' ? 'completed' : 'pending');
    }
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={() => handleFilterChange('all')}>
          Todos
        </button>
        <button className="btn btn-success me-2" onClick={() => handleFilterChange('completed')}>
          Completadas
        </button>
        <button className="btn btn-warning" onClick={() => handleFilterChange('pending')}>
          Pendientes
        </button>
      </div>
      <ul className="list-group">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className="list-group-item d-flex justify-content-between align-items-center" 
            style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}
          >
            {todo.title}
            <div>
              <button 
                className={`btn btn-${todo.status === 'completed' ? 'warning' : 'success'} me-2`} 
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.status === 'completed' ? 'Marcar como Pendiente' : 'Marcar como Completada'}
              </button>
              <button 
                className="btn btn-danger" 
                onClick={() => deleteTodo(todo.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;