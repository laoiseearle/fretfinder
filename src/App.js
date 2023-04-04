import React, { useState } from 'react';
import Header from './components/Header';
import Fretboard from './components/Fretboard';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => {
  const initialTuning = ['E', 'A', 'D', 'G', 'B', 'E'];
  const [openMenu, setOpenMenu] = useState(false);
  const [tuning, setTuning] = useState(initialTuning);

  const [menuSettings, setMenuSettings] = useState({
    useFlats: true,
    rightHanded: true,
    hideAccidentals: true,
    flattenPitch: true,
    fretNums: 'inlays',
    landscape: false,
  });

  const changeTuningFromPreset = preset => {
    setTuning(preset);
  };

  return (
    <div className={menuSettings.landscape ? 'App landscape' : 'App'}>
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        changeTuningFromPreset={changeTuningFromPreset}
        setMenuSettings={setMenuSettings}
        menuSettings={menuSettings}
      />
      <main>
        <Fretboard
          tuning={tuning}
          setTuning={setTuning}
          menuSettings={menuSettings}
        />
      </main>
    </div>
  );
};

export default App;
