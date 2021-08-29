import React from 'react';
import './Fret.css';

const Fret = ({
  note,
  index,
  updateTuning,
  notesArray,
  string,
  focusedNote,
  highlightNotes,
  menuSettings,
}) => {
  const noteIndex = notesArray.indexOf(note);

  const flattenNote = () => {
    noteIndex === 0
      ? updateTuning(string, notesArray[notesArray.length - 1])
      : updateTuning(string, notesArray[noteIndex - 1]);
  };

  const sharpenNote = () => {
    updateTuning(string, notesArray[(noteIndex + 1) % notesArray.length]);
  };

  const clickNote = () => {
    if (index === 0) {
      menuSettings.flattenPitch ? flattenNote() : sharpenNote();
    } else {
      highlightNotes(noteIndex);
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

  const noteDisplay = () => {
    // Always display open notes
    if (index === 0) {
      return 'flex';
    }

    if (menuSettings.hideAccidentals && note.length >= 2) {
      // Don't hide focused accidental after changing settings
      if (focusedNote === noteIndex) {
        return 'flex';
      } else {
        return 'none';
      }
    }

    if (focusedNote === noteIndex || focusedNote === -1) {
      return 'flex';
    } else {
      return 'none';
    }
  };

  const displayFretNum = () => {
    if (string !== 0 || index === 0) {
      return;
    } else if (
      menuSettings.fretNums === 'off' ||
      (menuSettings.fretNums === 'inlays' &&
        !Array.from([3, 5, 7, 9, 12]).includes(index))
    ) {
      return;
    }
    return <div className="fret-num">{index}</div>;
  };

  return (
    <div
      className={menuSettings.rightHanded ? 'fret' : 'fret fret-left-handed'}
    >
      {displayFretNum()}
      <div
        className="note"
        style={{
          backgroundColor: noteColor(),
          display: noteDisplay(),
        }}
        onClick={() => clickNote()}
      >
        {note}
      </div>
    </div>
  );
};

export default Fret;
