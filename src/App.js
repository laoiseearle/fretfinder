import React, { useState } from 'react';
import Header from './components/Header';
import Fretboard from './components/Fretboard';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  const [flattenPitch, setFlattenPitch] = useState(true);

  const togglePitch = () => {
    setFlattenPitch(!flattenPitch);
  };

  return (
    <div className="App">
      <Header togglePitch={togglePitch} flattenPitch={flattenPitch} />
      <Fretboard flattenPitch={flattenPitch} />
    </div>
  );
}

export default App;
