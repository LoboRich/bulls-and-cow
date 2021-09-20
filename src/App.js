import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import './App.css';
import Form from './components/Form';
import SecretNum from './components/SecretNum';
import Guesses from './components/Guesses';


function App() {
  const [secretNum, setSecretNum] = useState([1, 2, 4, 3]);
  const [answers, setAnswers] = useState([]);
  const [guesses, setGuess] = useState([]);

  const keyPress = (number) => {
    if (guesses.includes(number)) return;

    if(guesses.length < 4) setGuess([...guesses, number]);

    if (guesses.length === 3) {
      setAnswers([...answers, [...guesses, number]]);
      setGuess([]);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className='title'>
          <span style={{color: "#B97A95"}}>BULLS </span>  
          <span style={{color: "#716F81"}}>and </span>
          <span style={{color: "#F6AE99"}}>COWS</span>
          </h1>
        <Guesses guesses={guesses}/>
        <Board answers={answers}/>
        <Form keyPress={keyPress}/>
        <SecretNum secret={secretNum}/>
      </div>
    </div>
  );
}

export default App;
