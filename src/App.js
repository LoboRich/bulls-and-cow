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

    if(guesses.length <= 4) setGuess([...guesses, number]);

    if (guesses.length === 3) {
      
      const result = checkCombination(secretNum, [...guesses, number]);
      
      setAnswers([...answers, [result]]);
      
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

const checkCombination = (secret, guess) => {

  let ctrBull = 0
  let ctrCow = 0

  for (let i = 0; i < secret.length; i++) {
    if (guess.includes(secret[i]) && secret[i] === guess[i]) {
      ctrBull++
    } else if (guess.includes(secret[i])) {
      ctrCow++
    }
  }

  return {
    guess: guess,
    cow: ctrCow,
    bull: ctrBull
  }
}