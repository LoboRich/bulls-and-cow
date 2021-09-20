import React, { Component, useState } from 'react';
function Guesses({guesses}){

  return (
    <div className='guess'>
      {guesses.map((g, i) => { 
        return  <div id={i} className="guessDigit">{g}</div>;
      })}
    </div>
    
    );

  }

export default Guesses;
