import React from 'react';
import { Display } from './Display';
import { Numpad } from './Numpad';

export default function App() {
  return (
    <div className="calc">
      <Display />
      <Numpad />
    </div>
  );
}
