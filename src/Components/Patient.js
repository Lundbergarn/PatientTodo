import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import TodosModal from './TodosModal';
import Todo from './Todo';

function Patient({ patient, addTodosState }) {
  const [todos, setTodos] = useState([...patient.todos]);

  // Change todo status
  function handleTodo(status, name) {
    switch (status) {
      case 'red':
        setTodos(updateTodo('yellow', name))
        break;
      case 'yellow':
        setTodos(updateTodo('green', name))
        break;
      default:
        setTodos(updateTodo('red', name))
    }
  }

  // Add todos to list
  function addTodos(input) {
    if (input) {
      let selectedTodos = [];
      for (var property in input) {
        if (input[property].todo === true) {
          selectedTodos.push(input[property])
        }
      }
      setTodos(selectedTodos);
      // Update to main state
      addTodosState(selectedTodos, patient.id)
    }
  }

  // Update todolist
  function updateTodo(status, name) {
    const updatedStatus = todos.map(todo => {
      if (todo.name === name) {
        todo.status = status;
      }
      return todo;
    })
    // Update to main state
    addTodosState(updatedStatus, patient.id);
    return updatedStatus;
  }

  function renderTodos(todos) {
    if (todos) {
      todos = todos.sort((a, b) => {
        if (a.status === 'green' && b.status === 'red') return 1;
        else if (a.status === 'green' && b.status === 'green') return 0;
        else if (a.status === 'yellow' && b.status === 'yellow') return 0;
        else if (a.status === 'red' && b.status === 'red') return 0;
        else if (a.status === 'green' && b.status === 'yellow') return 1;
        else if (a.status === 'yellow' && b.status === 'green') return -1;
        else if (a.status === 'red' && b.status === 'yellow') return -1;
        else if (a.status === 'yellow' && b.status === 'red') return 1;
        else return -1;
      });
      return (
        todos.map(
          todo => (
            <Todo
              key={todo.name}
              name={todo.name}
              status={todo.status}
              handleTodo={handleTodo}
            />
          )
        )
      )
    }
  }

  return (
    <div>
      <Container style={{ marginTop: '30px', position: 'relative' }}>
        <TodosModal
          title="Lägg till todo"
          todos={todos}
          addTodos={addTodos}
        />
        {patient.activities > 0 ?
          <h2 style={{ color: 'rgb(143, 19, 19)' }}>{patient.title} - {patient.activities}</h2>
          : <h2>{patient.title} - {patient.activities}</h2>
        }

        {renderTodos(todos)}

      </Container>
    </div>
  );
}

export default Patient;
