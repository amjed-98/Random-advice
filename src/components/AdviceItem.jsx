import React, { Fragment } from 'react';

const AdviceItem = ({ advice, err, generateAdvice }) => {
  let content = (
    <Fragment>
      <h1 className='heading'>{advice}</h1>
      <button onClick={generateAdvice} className='button'>
        <span>give me an Advice</span>
      </button>
    </Fragment>
  );

  if (err) {
    content = <span className='error'>sorry, couldn't fetch an advice</span>;
  }
  return (
    <div className='app'>
      <div className='card'>{content}</div>
    </div>
  );
};

export default AdviceItem;
