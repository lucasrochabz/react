import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calculator />
    </>
  );
};
