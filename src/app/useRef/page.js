"use client"
import React, { useRef } from 'react';

const TitleChanger = () => {
  const newTitleRef = useRef(null);

  const handleChangeTitle = () => {
    const newTitle = newTitleRef.current.value;
    document.title = newTitle;
  };

  return (
    <div>
      <h1>Change Page Title</h1>
      <input
        type="text"
        ref={newTitleRef}
        placeholder="Enter new title"
      />
      <button onClick={handleChangeTitle}>Change Title</button>
    </div>
  );
};

export default TitleChanger;
