import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import API_URL from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async (filter = '') => {
    try {
      let url = API_URL;
      if (filter) {
        url += `?status=${filter}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error obteniendo las tareas:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (task) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error creando la tarea:', error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t.id === id);
      const updatedStatus = todo.status === 'completed' ? 'pending' : 'completed';

      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: updatedStatus })
      });

      setTodos(todos.map(t => t.id === id ? { ...t, status: updatedStatus } : t));
    } catch (error) {
      console.error('Error actualizando la tarea:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      setTodos(todos.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error eliminando la tarea:', error);
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} fetchTodos={fetchTodos} />
    </div>
  );
};

export default App;
