import React, { useState } from 'react';
import String from './String';
import './Fretboard.css';

const Fretboard = ({ tuning, setTuning, menuSettings }) => {
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
    <section
      className={
        menuSettings.rightHanded ? 'fretboard' : 'fretboard left-handed'
      }
    >
      {tuning.map((val, index) => (
        <String
          openNote={val}
          key={index}
          string={index}
          updateTuning={updateTuning}
          focusedNote={focusedNote}
          highlightNotes={highlightNotes}
          menuSettings={menuSettings}
        />
      ))}
    </section>
  );
};

export default Fretboard;
