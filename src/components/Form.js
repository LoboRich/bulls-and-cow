import React from 'react';

function Form({keyPress,remove}) {
  return (
    <div className="form">
        {[1,2,3,4,5,6,7,8,9,0].map((g, i) => { 
          return  <span key={i} className='key' onClick={() => keyPress(g)}>{g}</span>
        })}
        <span className='key' onClick={() => remove()}>Del</span>
    </div>
  );
}

export default Form;

  