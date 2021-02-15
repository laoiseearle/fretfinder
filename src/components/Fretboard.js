import React, { useState } from 'react';
import String from './String';
import './Fretboard.css';

const Fretboard = ({ flattenPitch, useFlats }) => {
  const initialTuning = ['E', 'A', 'D', 'G', 'B', 'E'];
  const [tuning, setTuning] = useState(initialTuning);
  const [focusedNote, setFocusedNote] = useState(-1);

  const updateTuning = (string, newNote) => {
    const newTuning = [...tuning];
    newTuning[string] = newNote;
    setTuning(newTuning);
  };

  const highlightNotes = note => {
    setFocusedNote(note);

    // Reset highlight after clicking twice
    if (note === focusedNote) {
      setFocusedNote(-1);
    }
  };
  return (
    <section className="fretboard">
      {tuning.map((val, index) => (
        <String
          openNote={val}
          key={index}
          string={index}
          updateTuning={updateTuning}
          flattenPitch={flattenPitch}
          useFlats={useFlats}
          focusedNote={focusedNote}
          highlightNotes={highlightNotes}
        />
      ))}
    </section>
  );
};

export default Fretboard;
