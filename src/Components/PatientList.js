import React, { useState, useEffect } from 'react';
import NameModal from './NameModal';
import Patient from './Patient';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import uuid from 'uuid';
import './patientList.css';
import RemoveModal from './RemoveModal';

function PatientList() {
  const [patientView, setPatientView] = useState(false);
  const [patient, setPatient] = useState({});
  const [list, setList] = useState([]);
  // const [list, setList] = useState([
  //   { id: uuid(), title: 'Pelle', activities: 0, todos: [] },
  //   { id: uuid(), title: 'Bamse', activities: 0, todos: [] },
  //   { id: uuid(), title: 'Morran', activities: 0, todos: [] },
  //   { id: uuid(), title: 'Murre', activities: 0, todos: [] },
  //   { id: uuid(), title: 'Gustav', activities: 0, todos: [] },
  //   { id: uuid(), title: 'Lyssa', activities: 0, todos: [] }
  // ]);

  useEffect(() => {
    const patients = localStorage.getItem('patientsList');
    if (patients) {
      setList(JSON.parse(patients));
    } else {
      setList([]);
    }
  }, []);

  // Add new patient
  function addPatient(title) {
    if (title) {
      let input = { id: uuid(), title, activities: 0, todos: [] };
      setList(items => [...items, input]);
      localStorage.setItem('patientsList', JSON.stringify([...list, input]));
      // setList(items => [...items, { id: uuid(), title, activities: 0, todos: [] }]);
    }
  }

  // Remove patient
  function removePatientHandler(id) {
    setList(items => [...items.filter(item => item.id !== id)]);
    localStorage.setItem('patientsList', JSON.stringify([...list.filter(item => item.id !== id)]));
  }

  // Switch to patient view
  function togglePatientView() {
    setPatientView(!patientView);
  }

  // Set patient att go to patientview
  function toPatientHandle(el) {
    togglePatientView();
    setPatient(el)
  }


  function addTodosState(input, id) {
    const update = list.map(el => {
      if (el.id === id) {
        let notDone = 0;
        input.forEach(el => {
          if (el.status !== 'green') {
            notDone++;
          }
        })
        el.activities = notDone;
        el.todos = input;
      }
      return el;
    })
    localStorage.setItem('patientsList', JSON.stringify(update));
    setList(update);
  }

  return (
    !patientView ?
      (
        <div>
          <Container>
            <NameModal
              title="Lägg till patient"
              addPatient={addPatient}
            />
            <div className="patient__list">
              {
                list.sort((a, b) => b.activities - a.activities).map(patient => {
                  return (
                    <Card key={patient.id} style={{ minWidth: '25%', flexBasis: '1', margin: '1rem' }}>
                      <Card.Body>
                        <RemoveModal patient={patient.id} removePatientHandler={removePatientHandler} />

                        {patient.activities > 0 ?
                          <Card.Title style={{ color: '#dc3545' }}>{patient.title} - {patient.activities}</Card.Title>
                          :
                          <Card.Title>{patient.title} - {patient.activities}</Card.Title>
                        }
                        {/* <Card.Text>Some quick example text.</Card.Text> */}

                        <Button
                          onClick={() => toPatientHandle(patient)}
                          variant="info"
                        >
                          Till patient
                        </Button>

                      </Card.Body>
                    </Card>
                  )
                })
              }
            </div>
          </Container>
        </div>
      ) :
      (
        <div>
          <Button
            style={{ height: '50px', width: '215px' }}
            variant="info"
            onClick={() => togglePatientView()}
          >
            Tillbaka till översikt
        </Button>
          <Patient
            addTodosState={addTodosState}
            patient={patient}
          />
        </div>
      )
  );
}

export default PatientList;
