"use client"

import React, { useState } from 'react';

const NameForm = () => {
  // useState hook to manage the state of the user's name
  const [name, setName] = useState('');

  // Event handler for updating the name when the input value changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

    // useState hook to manage the state of the counter
    const [count, setCount] = useState(0);

    // Event handler for incrementing the counter
    const handleIncrement = () => {
      setCount((prevCount)=> prevCount + 1);
      setCount((prevCount)=> prevCount + 1);
    };
  
    // Event handler for decrementing the counter
    const handleDecrement = () => {
      setCount(count - 1);
    };

  return (
    <div className='m-auto p-9'>
        <h1 className='font-bold underline'>UseState</h1>
      <h2>Hey, {name ? name : 'stranger'}!</h2>
      <form >
        <label htmlFor="nameInput">Enter your name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleNameChange}
          className='border-black border'
        />
      </form>
      <div className='my-9 border flex gap-5'>
        <h2>Counter: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>

    </div>
  );
};

export default NameForm;
