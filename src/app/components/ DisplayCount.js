// DisplayCount.js
import React, { useContext } from 'react';
import CountContext from '../useContext/CountContext';

const DisplayCount = () => {
  const { count } = useContext(CountContext);

  return (
   
       <div className='border m-5 border-orange-700'>
      <h2> SECOND component <br/> Counter: {count}</h2>
    </div>
  );
};

export default DisplayCount;
