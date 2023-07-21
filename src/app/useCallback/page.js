"use client"
import React, { useState, useMemo, useCallback } from 'react';

const CounterWithMemoAndCallback = () => {
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

  // Memoize the increment and decrement event handlers using useCallback
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const handleMultiplierChange = useCallback((event) => {
    setMultiplier(Number(event.target.value));
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>Square of Count: {squareCount}</h2>
      <input
        type="number"
        value={multiplier}
        onChange={handleMultiplierChange}
      />
      <h2>Count times Multiplier: {countTimesMultiplier}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterWithMemoAndCallback;
