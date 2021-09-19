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
        <h1 className='title'>
          <span style={{color: "#B97A95"}}>BULLS </span>  
          <span style={{color: "#716F81"}}>and </span>
          <span style={{color: "#F6AE99"}}>COWS</span>
          </h1>
        <Board />
        <Form />
        <SecretNum secret={state.secret}/>
      </div>
    </div>
  );
}

export default App;
