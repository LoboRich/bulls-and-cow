import React from 'react';
function Guesses({guesses}){

  return (
    <div className='guess'>
      {guesses.map((g, i) => { 
        return  <div key={i} className="guessDigit">{g}</div>;
      })}
    </div>
    
    );

  }

export default Guesses;
