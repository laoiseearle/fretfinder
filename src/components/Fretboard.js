import React, { useState } from 'react';
import String from './String';
import './Fretboard.css';

function Fretboard({ flattenPitch, useFlats }) {
  const initialTuning = ['E', 'A', 'D', 'G', 'B', 'E'];
  const [tuning, setTuning] = useState(initialTuning);

  const updateTuning = (string, newNote) => {
    const newTuning = [...tuning];
    newTuning[string] = newNote;
    setTuning(newTuning);
  };

  return (
    <main>
      <section className="fretboard">
        {tuning.map((val, index) => (
          <String
            openNote={val}
            key={index}
            string={index}
            updateTuning={updateTuning}
            flattenPitch={flattenPitch}
            useFlats={useFlats}
          />
        ))}
      </section>
    </main>
  );
}

export default Fretboard;
