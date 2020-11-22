import React from 'react';
import './Fret.css';

function Fret({ note, index, updateTuning, notesArray, string, flattenPitch }) {
  const noteIndex = notesArray.indexOf(note);

  const flattenNote = () => {
    noteIndex === 0
      ? updateTuning(string, notesArray[notesArray.length - 1])
      : updateTuning(string, notesArray[noteIndex - 1]);
  };
  const sharpenNote = () => {
    updateTuning(string, notesArray[(noteIndex + 1) % notesArray.length]);
  };

  const changeNote = () => {
    if (index === 0) {
      flattenPitch ? flattenNote() : sharpenNote();
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
