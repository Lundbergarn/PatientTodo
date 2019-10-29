import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


const RemoveModal = (props) => {

  const [modal, setModal] = useState(false);

  function toggle() {
    setModal(!modal);
  }

  function removeHandler() {
    const id = props.patient;
    props.removePatientHandler(id);
    toggle();
  }

  return (
    <div>
      <Button
        color="danger"
        onClick={toggle}
      >X</Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Vill du ta bort patient?</ModalHeader>
        <ModalBody>

          <Button
            color="info"
            style={{ marginTop: '2rem' }}
            block
            onClick={() => removeHandler()}
          >
            Ja
          </Button>

          <Button
            color="danger"
            style={{ marginTop: '2rem' }}
            block
            onClick={() => toggle()}
          >
            Nej
          </Button>

        </ModalBody>
      </Modal>
    </div>
  )
}

export default RemoveModal;
