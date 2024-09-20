import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
//import '../styles/main.css';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert('El título y la fecha de vencimiento son obligatorios');
      return;
    }
    addTodo({ title, description, status, due_date: dueDate });
    setTitle('');
    setDescription('');
    setStatus('pending');
    setDueDate('');
  };

  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Ingrese la descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formStatus">
        <Form.Label>Estado</Form.Label>
        <Form.Control
          as="select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pendiente</option>
          <option value="in-progress">En progreso</option>
          <option value="completed">Completada</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formDueDate">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar tarea
      </Button>
    </Form>
    </Container>
    
  );
};

export default TodoForm;