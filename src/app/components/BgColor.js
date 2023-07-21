// BackgroundColor.js
import React, { useReducer } from 'react';

const initialState = {
  color: 'white',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

const BackgroundColor = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleColorChange = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <div style={{ backgroundColor: state.color }}>
      <h1>Background Color: {state.color}</h1>
      <button onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
    </div>
  );
};

export default BackgroundColor;
