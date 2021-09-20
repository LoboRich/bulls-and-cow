import React from 'react';

const Board = ({answers}) => {

  const row = (data) => {
    return <tr>
      <td>{data.bull}</td>
      <td>{data.cow}</td>
      <td>{data.guess}</td>
    </tr>
  }
  return (
    <div className="combinations">
      <table>
        <tbody>
          <tr>
            <th>Bulls</th>
            <th>Cows</th>
            <th>Guesses</th>
          </tr>
          
          {answers.map((g, i) => { 
            return row(g);
          })}
        </tbody>
      </table>
    </div>
    
    );

  }

export default Board;
