// Counter.js
import React, { useContext } from 'react';
import CountContext from '../useContext/CountContext';

const Counter = () => {
  const { count, setCount } = useContext(CountContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='border m-5 border-orange-700'>
      <h2> FIRST component <br/> Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
