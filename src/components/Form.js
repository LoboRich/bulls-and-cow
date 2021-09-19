import React, {useState} from 'react';

const Form = () => {
  const [ guesses, setGuess ] = useState([]);
  
  const Keypress = (e) => {
    setGuess([...guesses,e.target.getAttribute("value")]);
  }
  
  return (
    
    <div className="form">
        <span className='key' value='1' onClick={(e) => Keypress(e)}>1</span>
        <span className='key' value='2'>2</span>
        <span className='key' value='3'>3</span>
        <span className='key' value='4'>4</span>
        <span className='key' value='5'>5</span>
        <span className='key' value='6'>6</span>
        <span className='key' value='7'>7</span>
        <span className='key' value='8'>8</span>
        <span className='key' value='9'>9</span>
    </div>
  );
}

export default Form;
