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

  const noteColor = () => {
    switch (note) {
      case 'C': {
        return '#fd2424';
      }
      case 'D': {
        return '#24fd48';
      }
      case 'E': {
        return '#fd3fd4';
      }
      case 'F': {
        return '#fde03f';
      }
      case 'G': {
        return '#174fe9';
      }
      case 'A': {
        return '#f58849';
      }
      case 'B': {
        return '#09cbe0';
      }
      default: {
        return 'white';
      }
    }
  };

  return (
    <div className="fret">
      <div className="note" style={{ backgroundColor: noteColor() }} onClick={changeNote}>
        {note}
      </div>
    </div>
  );
}

export default Fret;
