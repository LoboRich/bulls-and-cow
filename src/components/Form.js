import React from 'react';

function Form({keyPress}) {
  return (
    <div className="form">
        <span className='key' onClick={() => keyPress(1)}>1</span>
        <span className='key' onClick={() => keyPress(2)}>2</span>
        <span className='key' onClick={() => keyPress(3)}>3</span>
        <span className='key' onClick={() => keyPress(4)}>4</span>
        <span className='key' onClick={() => keyPress(5)}>5</span>
        <span className='key' onClick={() => keyPress(6)}>6</span>
        <span className='key' onClick={() => keyPress(7)}>7</span>
        <span className='key' onClick={() => keyPress(8)}>8</span>
        <span className='key' onClick={() => keyPress(9)}>9</span>
    </div>
  );
}

export default Form;
