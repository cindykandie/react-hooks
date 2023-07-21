"use client"
import React, { useState, useMemo } from 'react';

const CounterWithMemo = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Calculate the square of the count using useMemo
  const squareCount = useMemo(() => {
    console.log('Calculating square...');
    return count * count;
  }, [count]);

  // Calculate the product of count and multiplier using useMemo
  const countTimesMultiplier = useMemo(() => {
    console.log('Calculating countTimesMultiplier...');
    return count * multiplier;
  }, [count, multiplier]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleMultiplierChange = (event) => {
    setMultiplier(Number(event.target.value));
  };

  return (
    <div className='border'>
      <h2>Counter: {count}</h2>
      <h2>Square of Count: {squareCount}</h2>
      <input
      className='border'
        type="number"
        value={multiplier}
        onChange={handleMultiplierChange}
      />
      <h2>Count times Multiplier: {countTimesMultiplier}</h2>
      <button className='border mr-3' onClick={handleIncrement}>Increment</button>
      <button className='border' onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterWithMemo;
