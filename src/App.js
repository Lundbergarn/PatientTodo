import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientList from './Components/PatientList';

function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: '40px' }}>Patient Todo <i className="material-icons">pets</i></h1>
      <PatientList />
    </div>
  );
}

export default App;
