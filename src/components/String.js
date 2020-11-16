import React from 'react';
import Fret from './Fret';
import './String.css';

function String({ openNote, updateTuning, string }) {
  const fretNums = 13;
  const notesArray = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  let note = openNote;

  return (
    <div className="string">
      {[...Array(fretNums)].map((val, index) => {
        if (index !== 0) {
          const noteIndex = notesArray.indexOf(note);
          note = notesArray[(noteIndex + 1) % notesArray.length];
        }

        return (
          <Fret
            note={note}
            index={index}
            key={index}
            string={string}
            updateTuning={updateTuning}
            notesArray={notesArray}
          />
        );
      })}
    </div>
  );
}

export default String;
