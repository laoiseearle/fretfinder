import React from 'react';
import './Fret.css';

function Fret({ note, index }) {
  return (
    <>
      <div className="fret">
        <div className="note">{note}</div>
      </div>
    </>
  );
}

export default Fret;
