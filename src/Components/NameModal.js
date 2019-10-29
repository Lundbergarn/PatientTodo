import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const ItemModal = (props) => {
  const [patient, setPatient] = useState('');
  const [modal, setModal] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  function onChange(e) {
    setPatient(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.addPatient(patient);
    setPatient('');
    toggle();
  }

  return (
    <div>
      <Button
        color="info"
        style={{ marginBottom: '2rem', height: '50px' }}
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
              <Label for="patient">Patient</Label>
              <Input
                type="text"
                name="name"
                id="patient"
                value={patient}
                placeholder={props.title}
                onChange={onChange}
              ></Input>
              <Button
                color="info"
                style={{ marginTop: '2rem' }}
                block
              >{props.title}</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ItemModal;
