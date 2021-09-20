import React from 'react';

const SecretNum = ({secret, status}) => {
  return (
    <div className="randomNumber">
        {secret.map((g, i) => { 
          return <div className={status ? 'showDigit' : 'hiddenDigit'}>{g}</div>
        })}
    </div>
  );
}

export default SecretNum;
