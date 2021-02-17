import React, { useState } from 'react';
import Header from './components/Header';
import Fretboard from './components/Fretboard';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => {
  const initialTuning = ['E', 'A', 'D', 'G', 'B', 'E'];
  const [flattenPitch, setFlattenPitch] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [useFlats, setUseFlats] = useState(true);
  const [rightHanded, setRightHanded] = useState(true);
  const [hideAccidentals, setHideAccidentals] = useState(false);
  const [tuning, setTuning] = useState(initialTuning);
  const [fretNumSettings, setFretNumSettings] = useState('inlays');

  const togglePitch = () => {
    setFlattenPitch(!flattenPitch);
  };

  const toggleAccidentals = () => {
    setUseFlats(!useFlats);
  };

  const toggleHideAccidentals = () => {
    setHideAccidentals(!hideAccidentals);
  };

  const toggleHand = () => {
    setRightHanded(!rightHanded);
  };

  const changeTuningFromPreset = preset => {
    setTuning(preset);
  };

  const changeFretNums = fretSetting => {
    setFretNumSettings(fretSetting);
  };

  return (
    <div className="App">
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        togglePitch={togglePitch}
        toggleAccidentals={toggleAccidentals}
        toggleHideAccidentals={toggleHideAccidentals}
        toggleHand={toggleHand}
        flattenPitch={flattenPitch}
        changeTuningFromPreset={changeTuningFromPreset}
        changeFretNums={changeFretNums}
      />
      <main>
        <Fretboard
          flattenPitch={flattenPitch}
          useFlats={useFlats}
          rightHanded={rightHanded}
          hideAccidentals={hideAccidentals}
          tuning={tuning}
          setTuning={setTuning}
          fretNumSettings={fretNumSettings}
        />
      </main>
    </div>
  );
};

export default App;
