import React, {useState} from 'react';
import Board from './components/Board';
import './App.css';
import Form from './components/Form';
import SecretNum from './components/SecretNum';
import Guesses from './components/Guesses';


function App() {
  const [secretNum, setSecretNum] = useState([1, 2, 4, 3]);
  const [answers, setAnswers] = useState([]);
  const [guesses, setGuess] = useState([]);
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('Bulls and Cow')

  const keyPress = (number) => {
    if (guesses.includes(number)) return; 

    if(guesses.length <= 4) setGuess([...guesses, number]);

    if (guesses.length === 3) {
      const result = checkCombination(secretNum, [...guesses, number]);
      if (answers.length === 0) setAnswers([result])
      else setAnswers(answers => [...answers, result])

      if(result.bull === 4){
        setStatus(true);
        setTitle('Bulls Eye!');
      }
      setGuess([]);
      
    }
  }

  const checkCombination = (secret, guess) => {
    let countBulls = 0
    let countCows = 0
  
    for (let i = 0; i < secret.length; i++) {
      if (guess.includes(secret[i]) && secret[i] === guess[i]) {
        countBulls++
      } else if (guess.includes(secret[i])) {
        countCows++
      }
    }
  
    return {
      guess: guess,
      cow: countCows,
      bull: countBulls
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className='title'>{title}</h1>
        <Guesses guesses={guesses}/>
        <Board answers={answers}/>
        <Form keyPress={keyPress}/>
        <SecretNum secret={secretNum} status={status}/>
      </div>
    </div>
  );
}

export default App;