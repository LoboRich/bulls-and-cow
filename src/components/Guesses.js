import React, { Component } from 'react';
import Form from './Form';

const Guesses = (props) => {
  console.log('Guess' + props);
  const state = {
    guesses: [1,2,3,4]
  }
  return (
    <div className='guess'>
      {state.guesses.map((g, i) => { 
        return  <div className="guessDigit">{g}</div>;
      })}
     
    </div>
    
    );

  }

export default Guesses;
