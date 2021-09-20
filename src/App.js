import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import './App.css';
import Form from './components/Form';
import SecretNum from './components/SecretNum';
import Guesses from './components/Guesses';


function App() {
  const [secretNum, setSecretNum] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [guesses, setGuess] = useState([]);
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState({
    text: 'Bulls and Cows',
    color: '#B97A95'
  })

  const keyPress = (number) => {
    if (guesses.includes(number)) return; 

    if(guesses.length <= 4) setGuess([...guesses, number]);

    if (guesses.length === 3) {
      const result = checkCombination(secretNum, [...guesses, number]);
      if (answers.length === 0) setAnswers([result])
      else setAnswers(answers => [...answers, result])

      if(result.bull === 4){
        setStatus(true);
        setTitle({
          text: 'Bulls Eye!',
          color: '#6ECB63'
        });
        return
      }
      
      setGuess([]);
    }
  }

  const checkCombination = (secret, guess) => {
    let countBulls = 0
    let countCows = 0
    console.log(guess);
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

  const generateRandomNumber = () => {
    const combination = Math.floor(1000 + Math.random() * 9000);
    return isUnique(combination) ? Array.from(String(combination), Number) : generateRandomNumber()
  }
  
  const isUnique = (combination) => {
    return !/(.).*?\1/.test(combination)
  }

  useEffect(() => {
    setSecretNum(generateRandomNumber())
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1 className='title' style={{color: title.color}}>{title.text}</h1>
        <Guesses guesses={guesses}/>
        <Board answers={answers}/>
        <Form keyPress={keyPress}/>
        <SecretNum secret={secretNum} status={status}/>
      </div>
    </div>
  );
}

export default App;

