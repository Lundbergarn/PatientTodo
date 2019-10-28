import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './todo.css';

function Todo({ status, handleTodo, name }) {
  return (
    <Card style={{ flexBasis: '1', margin: '1rem' }}>
      <Button
        style={{ padding: '10px 0' }}
        className={status}
        onClick={(e) => handleTodo(status, name)}
        variant="primary"
      >{name}</Button>
    </Card>
  )
}

export default Todo;
