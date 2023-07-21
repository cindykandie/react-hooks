"use client"
import React from 'react';
import { CountProvider } from './CountContext';
import Counter from '../components/Counter';
import DisplayCount from '../components/ DisplayCount';

const UseContext = () => {
  return (
    <CountProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">React Count App</h1>
        <Counter />
        <DisplayCount />
      </div>
    </CountProvider>
  );
};

export default UseContext;
