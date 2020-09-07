import React from 'react';
import String from './String';
import './Fretboard.css';

function Fretboard() {
  return (
    <>
      <main>
        <section className="fretboard">
          <String />
          <String />
          <String />
          <String />
          <String />
          <String />
        </section>
      </main>
    </>
  );
}

export default Fretboard;
