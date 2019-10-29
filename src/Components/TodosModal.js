import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const TodosModal = (props) => {
  const [extra, setExtra] = useState('');
  const [modal, setModal] = useState(false);

  const list = [
    'Journal',
    'Recept',
    'Remiss',
    'Provsvar',
    'Ring hem',
    'Hemgångsråd',
    'Debitera',
    'Åtgärd'
  ];

  function toggle() {
    setModal(!modal);
  }

  function handleExtra(e) {
    setExtra(e.target.value);
  }

  function onSubmit(e) {
    let obj = { ...props.todos };
    e.preventDefault();

    let keys = [];
    for (let i = 0; i < props.todos.length; i++) {
      keys.push(props.todos[i].name)
    }

    // Loop list with inputs
    let i = 0;
    for (i; i < list.length; i++) {
      if (e.target[i].checked) {
        if (!keys.includes(e.target[i].id)) {
          obj[e.target[i].id] = { name: e.target[i].id, todo: e.target[i].checked, status: 'red' };
        }
      }
    }
    // Add extra input
    if (extra) {
      obj[extra] = { name: extra, todo: true, status: 'red' };
    }
    props.addTodos(obj);
    setExtra('');
    toggle();
  }

  return (
    <div>
      <Button
        color="info"
        style={{ marginBottom: '2rem', height: '50px', width: '215px' }}
        onClick={toggle}
      >{props.title}</Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>

              {list.map(name => {
                let keys = [];
                for (let i = 0; i < props.todos.length; i++) {
                  keys.push(props.todos[i].name)
                }
                if (keys.includes(name)) {
                  return (
                    <div key={name} className="form__todo">
                      <Label className="form__todo_label" for="todos">{name}</Label>
                      <Input
                        className="form__todo_input"
                        type="checkbox"
                        checked="defaultChecked"
                        id={name}
                      >
                      </Input>
                    </div>
                  )
                } else {
                  return (
                    <div key={name} className="form__todo">
                      <Label className="form__todo_label" for="todos">{name}</Label>
                      <Input
                        className="form__todo_input"
                        type="checkbox"
                        id={name}
                      >
                      </Input>
                    </div>
                  )
                }
              }
              )}

              <Label style={{ marginTop: '20px' }} for="todos">Övrigt</Label>
              <Input
                type="text"
                name="name"
                id="todos"
                placeholder="Extra"
                value={extra}
                onChange={handleExtra}
              ></Input>

              <Button
                color="info"
                style={{ marginTop: '2rem' }}
                block
              >
                {props.title}
              </Button>

            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default TodosModal;
