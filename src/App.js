import React from 'react';
import Header from './components/Header';
import Fretboard from './components/Fretboard';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Fretboard />
    </div>
  );
}

export default App;
