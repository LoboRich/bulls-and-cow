import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import './App.css';
import Form from './components/Form';
import SecretNum from './components/SecretNum';


function App() {

  const state = {
    secret: [1, 2, 4, 3]
  }

  return (
    <div className="App">
      <div className="container">
        <Board />
        <Form />
        <SecretNum />
      </div>
    </div>
  );
}

export default App;
