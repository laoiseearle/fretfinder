import React, { useState } from 'react';
import Header from './components/Header';
import Fretboard from './components/Fretboard';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  const [flattenPitch, setFlattenPitch] = useState(true);
  const [openMenu, setOpenMenu] = useState(true);

  const togglePitch = () => {
    setFlattenPitch(!flattenPitch);
  };

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} togglePitch={togglePitch} flattenPitch={flattenPitch} />
      <Fretboard flattenPitch={flattenPitch} />
    </div>
  );
}

export default App;
