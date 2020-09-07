import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <h1 className="title">FretFinder</h1>

        <div className="pitch-direction">
          <i className="fa fa-arrow-circle-down" size="lg"></i>
        </div>

        <div className="settings">
          <i className="fa fa-cog"></i>
        </div>

        <div className="help">
          <i className="fa fa-question-circle"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
