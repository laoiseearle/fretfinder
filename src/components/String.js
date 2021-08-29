import React from 'react';
import Fret from './Fret';
import './String.css';

const String = ({
  openNote,
  updateTuning,
  string,
  focusedNote,
  highlightNotes,
  menuSettings,
}) => {
  const fretNums = 12;
  const notesArrayFlat = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ];
  const notesArraySharp = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];
  const notesArray = menuSettings.useFlats ? notesArrayFlat : notesArraySharp;
  let note = openNote;
  let openNoteIndex;

  return (
    <div
      className={
        menuSettings.rightHanded ? 'string' : 'string string-left-handed'
      }
    >
      {[...Array(fretNums + 1)].map((val, index) => {
        // Open Note
        if (index === 0) {
          // Find position of note when switching between accidental types
          note.includes('#')
            ? (openNoteIndex = notesArraySharp.indexOf(note))
            : (openNoteIndex = notesArrayFlat.indexOf(note));

          note = notesArray[openNoteIndex];
        } else {
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
            focusedNote={focusedNote}
            highlightNotes={highlightNotes}
            menuSettings={menuSettings}
          />
        );
      })}
    </div>
  );
};

export default String;
