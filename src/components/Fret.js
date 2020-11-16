import React from 'react';
import './Fret.css';

function Fret({ note, index, updateTuning, notesArray, string }) {
  const noteIndex = notesArray.indexOf(note);

  const changeNote = () => {
    if (index === 0) {
      updateTuning(string, notesArray[(noteIndex + 1) % notesArray.length]);
    }
  };

  return (
    <div className="fret">
      <div className="note" onClick={changeNote}>
        {note}
      </div>
    </div>
  );
}

export default Fret;
