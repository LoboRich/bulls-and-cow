import React, { Component } from 'react';



const Board = ({answers}) => {
  return (
    <div className="combinations">
      <table>
        <tr>
          <th>Bulls</th>
          <th>Cows</th>
          <th colspan="4">Guesses</th>
        </tr>
        {answers.map((g, i) => { 
          return  <tr id={i}>{g}</tr>
        })}
      </table>
    </div>
    
    );

  }

export default Board;
