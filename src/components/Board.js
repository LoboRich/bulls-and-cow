import React, { Component } from 'react';



const Board = ({answers}) => {
  return (
    <div className="combinations">
      <table>
        <tr>
          <th>Bulls</th>
          <th>Cows</th>
          <th>Guesses</th>
        </tr>
        
        {answers.map((g, i) => { 
          return <tr id={i}><td>{g.bulls}</td><td>{g.cows}</td><td>{g.guess}</td></tr>
        })}
      </table>
    </div>
    
    );

  }

export default Board;
