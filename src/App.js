import React, { useState } from 'react';
import Header from './components/Header';
import Fretboard from './components/Fretboard';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  const [flattenPitch, setFlattenPitch] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [useFlats, setUseFlats] = useState(true);

  const togglePitch = () => {
    setFlattenPitch(!flattenPitch);
  };
  const toggleAccidentals = () => {
    setUseFlats(!useFlats);
  };

  return (
    <div className="App">
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        togglePitch={togglePitch}
        toggleAccidentals={toggleAccidentals}
        flattenPitch={flattenPitch}
      />
      <Fretboard flattenPitch={flattenPitch} useFlats={useFlats} />
    </div>
  );
}

export default App;
