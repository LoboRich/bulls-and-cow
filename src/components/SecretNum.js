import React from 'react';

const SecretNum = ({secret, status}) => {
  return (
    <div className="randomNumber">
        {secret.map((g, i) => { 
          return <div key={i} className={status ? 'showDigit' : 'hiddenDigit'}>{g}</div>
        })}
    </div>
  );
}

export default SecretNum;
